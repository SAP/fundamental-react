import { GridSelector } from '../constants';
import keycode from 'keycode';
import tabbable from 'tabbable';

// ie
if (global.Element && !Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector;
}

if (typeof NodeList !== 'undefined' && NodeList.prototype && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}

export default class GridManager {
    constructor(options = {}) {
        this.attachTo(options);
    }

    attachTo({
        gridNode = null,
        firstFocusedElement = null, // first DOM element to be focused, if it exists in the grid. Takes priority over firstFocusedCoordinates
        firstFocusedCoordinates = { row: 0, col: 0 }, // first coordinates in the grid to attempt to focus
        firstCellSearchDirection = { directionX: 0, directionY: 0 }, // direction to search for an initial cell if provided coordinates are invalid
        enableHeaderCells = true,
        focusOnInit = false,
        wrapRows = false,
        wrapCols = false,
        onPassBoundary = () => {},
        disabledCells = []
    }) {
        if (gridNode) {
            this.gridNode = gridNode;
            this.enableHeaderCells = enableHeaderCells;
            this.wrapRows = wrapRows;
            this.wrapCols = wrapCols;
            this.onPassBoundary = onPassBoundary;
            this.disabledCells = disabledCells;
            this.focusedRow = 0;
            this.focusedCol = 0;
            this.setupFocusGrid();

            if (this.grid.length) {
                let firstFocusedCell = firstFocusedElement ? this.getCellProperties(firstFocusedElement) : {
                    row: firstFocusedCoordinates.row,
                    col: firstFocusedCoordinates.col,
                    element: this.grid[firstFocusedCoordinates.row] ?
                        this.grid[firstFocusedCoordinates.row][firstFocusedCoordinates.col] : null
                };

                if (!this.isValidCell(firstFocusedCell) || this.isDisabledCell(firstFocusedCell.element)) {
                    firstFocusedCell = this.getNextCell(
                        firstFocusedCell,
                        firstCellSearchDirection.directionX,
                        firstCellSearchDirection.directionY
                    );
                }

                if (firstFocusedCell) {
                    this.setFocusPointer(firstFocusedCell.row, firstFocusedCell.col);

                    if (focusOnInit) {
                        this.focusCell(firstFocusedCell);
                    }

                    this.registerEvents();
                }
            }
        }
    }

    setupFocusGrid = () => {
        this.grid = [];

        this.gridNode && Array.prototype.forEach.call(
            this.gridNode.querySelectorAll(GridSelector.ROW), (row) => {
                const rowCells = [];

                Array.prototype.forEach.call(
                    row.querySelectorAll(`${GridSelector.CELL}, ${this.enableHeaderCells && GridSelector.HEADER}`), (cell) => {
                        let cellToPush = cell;
                        cell.setAttribute('tabindex', -1);

                        const focusableElements = cell.querySelectorAll(GridSelector.FOCUSABLE);
                        if (focusableElements) {
                            // disable default tabbing behavior of links, buttons, etc.
                            focusableElements.forEach(element => {
                                element.setAttribute('tabindex', -1);
                            });

                            if (focusableElements.length === 1) {
                                cellToPush = focusableElements[0];
                            }
                        }
                        rowCells.push(cellToPush);
                    }
                );

                if (rowCells.length) {
                    this.grid.push(rowCells);
                }
            }
        );
    };

    clearEvents = () => {
        this.gridNode.removeEventListener('keydown', this.handleKeyDown);
        this.gridNode.removeEventListener('mouseup', this.handleClickCell);
    };

    registerEvents = () => {
        this.clearEvents();
        this.gridNode.addEventListener('keydown', this.handleKeyDown);
        this.gridNode.addEventListener('mouseup', this.handleClickCell);
    };

    getCellProperties = (element, knownCoordinates) => {
        const cellCoordinates = knownCoordinates ? knownCoordinates : this.getCellCoordinates(element);
        let cell;
        if (cellCoordinates) {
            cell = {
                row: cellCoordinates.row,
                col: cellCoordinates.col,
                element: element
            };
            if (element) {
                cell.focusableElements = cell.element.querySelectorAll(GridSelector.FOCUSABLE);
            }
        }

        return cell;
    }

    getCellCoordinates = (element) => {
        for (let row = 0; row < this.grid.length; row++) {
            for (let col = 0; col < this.grid[row].length; col++) {
                if (element && (
                    this.grid[row][col] === element ||
                    this.grid[row][col].contains(element) ||
                    element.contains(this.grid[row][col])
                )) {
                    return { row, col };
                }
            }
        }
        return null;
    }

    setFocusPointer = (row, col) => {
        if (this.isValidCell({ row, col })) {
            const currentCell = this.grid[this.focusedRow][this.focusedCol];
            const nextCell = this.grid[row][col];

            currentCell.setAttribute('tabindex', -1);
            nextCell.setAttribute('tabindex', 0);

            this.focusedRow = row;
            this.focusedCol = col;
        }
    };

    isValidCell = ({ row, col }) => {
        return (
            !isNaN(row) &&
            !isNaN(col) &&
            row >= 0 &&
            col >= 0 &&
            this.grid &&
            this.grid.length &&
            row < this.grid.length &&
            col < this.grid[row].length
        );
    };

    isDisabledCell(element) {
        let isDisabled = false;
        this.disabledCells.forEach((cell) => {
            if (cell.contains(element)) {
                isDisabled = true;
            }
        });

        return isDisabled;
    }

    focusCell = ({ row, col, element, focusableElements }) => {
        this.setFocusPointer(row, col);
        if (
            focusableElements &&
            focusableElements.length === 1
        ) {
            focusableElements[0].focus();
        } else {
            element.focus();
        }
    };

    handleKeyDown = (event) => {
        this.syncFocusPointerToActiveElement(event.target);

        const key = event.which || event.keyCode;
        const currentCell = this.getCellProperties(
            this.grid[this.focusedRow][this.focusedCol],
            { row: this.focusedRow, col: this.focusedCol }
        );

        let nextCell = currentCell;

        switch (key) {
            case keycode.codes.up:
                nextCell = this.getNextCell(currentCell, 0, -1);
                break;
            case keycode.codes.down:
                nextCell = this.getNextCell(currentCell, 0, 1);
                break;
            case keycode.codes.left:
                nextCell = this.getNextCell(currentCell, -1, 0);
                break;
            case keycode.codes.right:
                nextCell = this.getNextCell(currentCell, 1, 0);
                break;
            case keycode.codes.home:
                nextCell = this.getNextCell(
                    this.getCellProperties(
                        this.grid[this.focusedRow][this.grid[this.focusedRow].length],
                        { row: this.focusedRow, col: -1 }
                    ), 1, 0
                );
                break;
            case keycode.codes.end:
                nextCell = this.getNextCell(
                    this.getCellProperties(
                        this.grid[this.focusedRow][this.grid[this.focusedRow].length],
                        { row: this.focusedRow, col: this.grid[this.focusedRow].length }
                    ), -1, 0
                );
                break;
            case keycode.codes.tab:
                const nextElement = this.getNextOutsideTabbableElement(event.shiftKey);
                nextElement && nextElement.focus();
                event.preventDefault();
                return;
            default:
                return;
        }

        if (nextCell) {
            this.focusCell(nextCell);
        }
        event.preventDefault();
    };

    syncFocusPointerToActiveElement = (focusedTarget) => {
        const focusedCell = this.getCellProperties(
            this.grid[this.focusedRow][this.focusedCol],
            { row: this.focusedRow, col: this.focusedCol }
        ).element;

        if (focusedCell === focusedTarget || focusedCell.contains(focusedTarget)) {
            return;
        }

        this.setFocusPointer(focusedCell.row, focusedCell.col);
    };

    handleClickCell = (event) => {
        const clickedGridCell = this.getCellProperties(
            this.findClosestMatch(event.target, `${GridSelector.CELL}, ${GridSelector.FOCUSABLE}`)
        );

        if (clickedGridCell) {
            this.focusCell({
                row: clickedGridCell.row,
                col: clickedGridCell.col,
                element: clickedGridCell.element,
                focusableElements: clickedGridCell.focusableElements
            });
        }
    };

    didPassBoundary = (rowLength, candidateRow, candidateCol, directionX, directionY) => {
        if (directionX === -1) {
            return (
                (candidateRow < 0) ||
                (!this.wrapRows && (candidateCol < 0))
            );
        } else if (directionX === 1) {
            return (
                (candidateRow >= this.grid.length) ||
                (!this.wrapRows && (candidateCol >= rowLength))
            );
        } else if (directionY === -1) {
            return (
                (candidateCol < 0) ||
                (!this.wrapCols && (candidateRow < 0))
            );
        } else if (directionY === 1) {
            return (
                (candidateCol >= rowLength) ||
                (!this.wrapCols && (candidateRow >= this.grid.length))
            );
        }
        return false;
    }

    getNextCell = (currentCell, directionX, directionY) => {
        // directionX: 1 = right, -1 = left
        // directionY: 1 = down, -1 = up

        let nextCellElement = currentCell;

        if (directionX !== 0) { // horizontal
            let candidateRow = currentCell.row;
            let candidateCol = currentCell.col;
            do {
                candidateCol += directionX;

                if (candidateRow > this.grid.length - 1) {
                    candidateRow = this.grid.length - 1;
                }

                let rowLength = this.grid[candidateRow].length;

                if (this.wrapRows) {
                    if (directionX === 1 && candidateCol >= rowLength) {
                        candidateRow++;
                        candidateCol = 0;
                    } else if (directionX === -1 && candidateCol < 0) {
                        candidateRow--;
                        candidateCol = rowLength - 1;
                    }
                }

                if (this.didPassBoundary(rowLength, candidateRow, candidateCol, directionX, directionY)) {
                    this.onPassBoundary({ currentCell, directionX, directionY });

                    return null;
                }
            } while (
                !this.isValidCell({ row: candidateRow, col: candidateCol }) ||
                this.isDisabledCell(this.grid[candidateRow][candidateCol]) ||
                this.grid[candidateRow][candidateCol] === currentCell.element
            );

            nextCellElement = this.getCellProperties(
                this.grid[candidateRow][candidateCol],
                { row: candidateRow, col: candidateCol }
            );
        } else if (directionY !== 0) { // vertical
            let candidateRow = currentCell.row;
            let candidateCol = currentCell.col;
            do {
                candidateRow += directionY;

                let rowLength = this.grid[currentCell.row] ? this.grid[currentCell.row].length : 0;

                if (this.wrapCols) {
                    if (directionY === 1 && candidateRow >= this.grid.length) {
                        candidateCol++;
                        candidateRow = 0;
                    } else if (directionY === -1 && candidateRow < 0) {
                        candidateCol--;
                        candidateRow = this.grid.length - 1;
                    }
                }

                if (this.didPassBoundary(rowLength, candidateRow, candidateCol, directionX, directionY)) {
                    this.onPassBoundary({ currentCell, directionX, directionY });

                    return null;
                }
            } while (
                !this.isValidCell({ row: candidateRow, col: candidateCol }) ||
                this.isDisabledCell(this.grid[candidateRow][candidateCol]) ||
                this.grid[candidateRow][candidateCol] === currentCell.element
            );

            nextCellElement = this.getCellProperties(
                this.grid[candidateRow][candidateCol],
                { row: candidateRow, col: candidateCol }
            );
        }

        return {
            row: nextCellElement.row,
            col: nextCellElement.col,
            element: nextCellElement.element,
            focusableElements: nextCellElement.focusableElements
        };
    };

    getNextOutsideTabbableElement = (shiftKey) => {
        const tabbableElements = tabbable(document);
        let nextElement;
        tabbableElements.forEach((element, index) => {
            if (element.contains(document.activeElement)) {
                let currIndex = index;
                while (
                    currIndex >= 0 &&
                    currIndex < tabbableElements.length &&
                    this.gridNode.contains(tabbableElements[currIndex])
                ) {
                    currIndex += shiftKey ? -1 : 1;
                }
                nextElement = tabbableElements[currIndex];
            }
        });
        return nextElement;
    }

    findClosestMatch = (element, selector) => {
        if (element.matches && element.matches(selector)) {
            return element;
        }

        if (element.parentNode) {
            return this.findClosestMatch(element.parentNode, selector);
        }

        return null;
    };
}
