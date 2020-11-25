import { GridSelector } from '../constants';
import keycode from 'keycode';
import { tabbable } from 'tabbable';

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
        rowNavigation = false, // allows the user to navigate by row instead of by cell
        enableHeaderCells = true,
        skipFirstColumnTabbing = true, // skip the first column when tabbing in row navigation, which is often used for checkboxes
        focusOnInit = false,
        wrapRows = false,
        wrapCols = false,
        onFocusCell = () => {},
        onKeyDownCell = () => {},
        onPassBoundary = () => {},
        onClickRow = () => {},
        onToggleEditMode = () => {},
        disabledCells = []
    }) {
        if (gridNode) {
            this.gridNode = gridNode;
            this.rowNavigation = rowNavigation;
            this.enableHeaderCells = enableHeaderCells;
            this.skipFirstColumnTabbing = skipFirstColumnTabbing;
            this.cellSelector = `${GridSelector.CELL}, ${this.enableHeaderCells && GridSelector.HEADER}`;
            this.wrapRows = wrapRows;
            this.wrapCols = wrapCols;
            this.onFocusCell = onFocusCell;
            this.onKeyDownCell = onKeyDownCell;
            this.onPassBoundary = onPassBoundary;
            this.onClickRow = onClickRow;
            this.onToggleEditMode = onToggleEditMode;
            this.disabledCells = disabledCells;
            this.focusedRow = 0;
            this.focusedCol = 0;
            this.editMode = false;
            this.setupFocusGrid();

            if (this.grid.length) {
                let firstFocusedCell = this.getCellProperties(firstFocusedElement);

                if (!firstFocusedCell) {
                    firstFocusedCell = {
                        row: firstFocusedCoordinates.row,
                        col: firstFocusedCoordinates.col,
                        element: this.grid[firstFocusedCoordinates.row] ?
                            this.grid[firstFocusedCoordinates.row][firstFocusedCoordinates.col]?.element : null
                    };
                }

                if (!this.isValidCell(firstFocusedCell) || this.isDisabledCell(firstFocusedCell.element)) {
                    firstFocusedCell = this.getNextCell(
                        firstFocusedCell,
                        firstCellSearchDirection.directionX,
                        firstCellSearchDirection.directionY
                    );
                }

                this.setFocusPointer(firstFocusedCell.row, firstFocusedCell.col);

                if (focusOnInit) {
                    this.focusCell(firstFocusedCell);
                }

                this.registerEvents();
            }
        }
    }

    setupFocusGrid = () => {
        this.grid = [];
        let skippedRows = 0;

        this.gridNode && Array.prototype.forEach.call(
            this.gridNode.querySelectorAll(GridSelector.ROW), (row, rowIndex) => {
                const rowCells = [];
                let cellIndex = 0;

                if (this.rowNavigation) {
                    row.setAttribute('tabindex', -1);
                }

                Array.prototype.forEach.call(
                    row.querySelectorAll(this.cellSelector), (cell) => {
                        let colSpan = cell.colSpan;
                        cell.setAttribute('tabindex', -1);
                        cell.addEventListener('focus', this.handleFocusCell);

                        for (let i = 1; i <= colSpan; i++) {
                            rowCells.push({
                                row: rowIndex - skippedRows,
                                col: cellIndex,
                                element: cell,
                                rowElement: row,
                                focusableElements: cell.querySelectorAll(GridSelector.FOCUSABLE),
                                editableElement: cell.querySelector(GridSelector.EDITABLE)
                            });

                            cellIndex++;
                        }
                    }
                );

                if (rowCells.length) {
                    this.grid.push(rowCells);
                } else {
                    skippedRows++;
                }
            }
        );
        this.toggleTabbableElements(false, this.getAllFocusableElements(false));
    };

    clearEvents = () => {
        this.gridNode?.removeEventListener('keydown', this.handleKeyDown);
        this.gridNode?.removeEventListener('mouseup', this.handleClickCell);
    };

    registerEvents = () => {
        this.clearEvents();
        this.gridNode?.addEventListener('keydown', this.handleKeyDown);
        this.gridNode?.addEventListener('mouseup', this.handleClickCell);
    };

    getCellProperties = (element, knownCoordinates) => {
        const cellCoordinates = knownCoordinates ? knownCoordinates : this.getCellCoordinates(element);
        let cell;
        if (cellCoordinates) {
            cell = this.grid[cellCoordinates.row][cellCoordinates.col];
        }

        return cell;
    }

    getCellCoordinates = (element) => {
        for (let row = 0; row < this.grid.length; row++) {
            for (let col = 0; col < this.grid[row].length; col++) {
                if (element && (
                    this.grid[row][col].element === element ||
                    this.grid[row][col].element.contains(element) ||
                    element.contains(this.grid[row][col].element)
                )) {
                    return { row, col };
                }
            }
        }
        return null;
    }

    getCurrentCellProperties = () => {
        return this.grid[this.focusedRow][this.focusedCol];
    }

    setFocusPointer = (row, col) => {
        if (this.isValidCell({ row, col })) {
            const currentCell = this.grid[this.focusedRow][this.focusedCol];
            const nextCell = this.grid[row][col];
            const elementProp = !this.rowNavigation ? 'element' : 'rowElement';

            if (!this.editMode) {
                currentCell[elementProp].setAttribute('tabindex', -1);
                nextCell[elementProp].setAttribute('tabindex', 0);
            }

            this.focusedRow = row;
            this.focusedCol = col;
        }
    };

    isValidCell = (cell) => {
        if (cell) {
            const { row, col } = cell;

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
        } else {
            return false;
        }
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

    isEditableCell = ({ focusableElements, editableElement } = {}) => {
        return (focusableElements?.length > 1 || editableElement);
    }

    focusCell = (nextCell, event) => {
        const { row, col, element, focusableElements } = nextCell;
        this.setFocusPointer(row, col);
        const posX = window.pageXOffset;
        const posY = window.pageYOffset;

        if (this.editMode) {
            // only redirect focus upon clicking or entering edit mode on table cell element
            if (event.target === element) {
                focusableElements[0]?.focus();
            }
        } else {
            element.focus();
        }

        window.scrollTo(posX, posY);
    };

    handleFocusCell = (event) => {
        if (event.target.matches && event.target.matches(this.cellSelector)) {
            const cell = this.getCellProperties(event.target);
            if (!this.rowNavigation &&
                cell.focusableElements?.length === 1 &&
                !cell.focusableElements[0].matches(GridSelector.EDITABLE)
            ) {
                cell.focusableElements[0].focus();
            } else if (this.rowNavigation) {
                cell.rowElement?.focus();
            }
            this.onFocusCell(cell, event);
        }
    }

    toggleEditMode = (currentCell, enable) => {
        this.editMode = !!enable;
        const elementProp = !this.rowNavigation ? 'element' : 'rowElement';
        currentCell[elementProp].setAttribute('tabindex', enable ? -1 : 0);
        const focusableElements = this.getAllFocusableElements(this.skipFirstColumnTabbing);
        this.toggleTabbableElements(enable, focusableElements);
        if (focusableElements.length > 0) {
            this.onToggleEditMode(enable);
        }
    }

    getAllFocusableElements = (skipFirstColumn) => {
        let focusableElements = [];

        this.grid.forEach((row) => {
            row.forEach((cell) => {
                if (!(this.rowNavigation && skipFirstColumn && cell?.col === 0)) {
                    focusableElements = [...focusableElements, ...cell?.focusableElements];
                }
            });
        });

        return focusableElements;
    }

    toggleTabbableElements = (enable, focusableElements) => {
        if (focusableElements.length) {
            focusableElements.forEach(element => {
                element.setAttribute('tabindex', enable ? 0 : -1);
            });
        }
    }

    handleKeyDown = (event) => {
        const key = event.which || event.keyCode;
        const currentCell = this.grid[this.focusedRow][this.focusedCol];

        let nextCell = currentCell;
        let pressedNavigationalKey = false;

        switch (key) {
            case keycode.codes.up:
                nextCell = this.getNextCell(currentCell, 0, -1);
                pressedNavigationalKey = true;
                break;
            case keycode.codes.down:
                nextCell = this.getNextCell(currentCell, 0, 1);
                pressedNavigationalKey = true;
                break;
            case keycode.codes.left:
                if (!this.rowNavigation) {
                    nextCell = this.getNextCell(currentCell, -1, 0);
                    pressedNavigationalKey = true;
                }
                break;
            case keycode.codes.right:
                if (!this.rowNavigation) {
                    nextCell = this.getNextCell(currentCell, 1, 0);
                    pressedNavigationalKey = true;
                }
                break;
            case keycode.codes.home:
                if (!this.rowNavigation) {
                    nextCell = this.getNextCell({ row: this.focusedRow, col: -1 }, 1, 0);
                    pressedNavigationalKey = true;
                }
                break;
            case keycode.codes.end:
                if (!this.rowNavigation) {
                    nextCell = this.getNextCell({ row: this.focusedRow, col: this.grid[this.focusedRow].length }, -1, 0);
                    pressedNavigationalKey = true;
                }
                break;
            case keycode.codes.enter:
                if (!this.rowNavigation) {
                    if (event.target.matches(this.cellSelector)) {
                        event.preventDefault();
                    }
                    if (this.isEditableCell(currentCell) && !event.target.matches(GridSelector.HAS_ENTER_KEY_HANDLING)) {
                        this.toggleEditMode(currentCell, !this.editMode);
                    }
                    if (!this.editMode) {
                        nextCell = this.getParentCell(event.target);
                    }
                } else {
                    if (event.target.matches(GridSelector.ROW)) {
                        this.onClickRow(currentCell, event);
                    }
                }
                break;
            case keycode.codes.esc:
                this.toggleEditMode(currentCell, false);
                nextCell = this.getParentCell(event.target);
                break;
            case keycode.codes.tab:
                if (!this.editMode) {
                    if (!this.rowNavigation) {
                        const nextElement = this.getNextOutsideTabbableElement(event.shiftKey);
                        nextElement?.focus();
                        event.preventDefault();
                    } else if (currentCell.row > 0 && !event.shiftKey) { // don't activate edit mode if shift-tabbing away from table
                        this.toggleEditMode(currentCell, true);
                    }
                }
                return;
            default:
                this.onKeyDownCell(nextCell, event);
                return;
        }

        if (nextCell) {
            this.focusCell(nextCell, event);
            this.onKeyDownCell(nextCell, event);
        }

        if (!this.editMode && pressedNavigationalKey) {
            event.preventDefault();
        }
    };

    handleClickCell = (event) => {
        // reset current edit state
        const currentCell = this.grid[this.focusedRow][this.focusedCol];

        if (this.isEditableCell(currentCell) && this.editMode) {
            this.toggleEditMode(currentCell, false);
        }

        const clickedGridCell = this.getParentCell(event.target);

        if (this.isEditableCell(clickedGridCell)) {
            this.toggleEditMode(clickedGridCell, true);
        }

        if (clickedGridCell) {
            this.focusCell(clickedGridCell, event);
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

        if (this.editMode) {
            return null;
        }

        let nextCell = currentCell;

        if (currentCell) {
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
                    this.isDisabledCell(this.grid[candidateRow][candidateCol].element) ||
                    this.grid[candidateRow][candidateCol].element === currentCell.element
                );

                nextCell = this.grid[candidateRow][candidateCol];
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
                    this.isDisabledCell(this.grid[candidateRow][candidateCol].element) ||
                    this.grid[candidateRow][candidateCol].element === currentCell.element
                );

                nextCell = this.grid[candidateRow][candidateCol];
            }
        }

        return nextCell;
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

    getParentCell = (element) => {
        return this.getCellProperties(this.findClosestMatch(element, this.cellSelector));
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
