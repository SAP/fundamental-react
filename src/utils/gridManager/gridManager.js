import { GridSelector } from '../constants';
import keycode from 'keycode';
import tabbable from 'tabbable';

// ie
if (global.Element && !Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector;
}

export default class GridManager {
    constructor(gridNode, firstFocusedRow, firstFocusedCol) {
        this.attachTo(gridNode, firstFocusedRow, firstFocusedCol);
    }

    attachTo(gridNode = false, firstFocusedRow = 0, firstFocusedCol = 0) {
        if (gridNode) {
            this.gridNode = gridNode;
            this.focusedRow = firstFocusedRow;
            this.focusedCol = firstFocusedCol;
            this.editMode = false;
            this.setupFocusGrid();
            if (this.grid.length) {
                this.setFocusPointer(this.focusedRow, this.focusedCol);
                this.registerEvents();
            }
        }
    }

    setupFocusGrid = () => {
        this.grid = [];

        this.gridNode && Array.prototype.forEach.call(
            this.gridNode.querySelectorAll(GridSelector.ROW), (row) => {
                const rowCells = [];

                Array.prototype.forEach.call(
                    row.querySelectorAll(GridSelector.CELL), (cell) => {
                        const colSpan = cell.colSpan;
                        if (!cell.hasAttribute('tabindex')) {
                            cell.setAttribute('tabindex', -1);
                        }

                        const focusableElements = cell.querySelectorAll(GridSelector.FOCUSABLE);
                        if (focusableElements) {
                            // disable default tabbing behavior of links, buttons, etc.
                            focusableElements.forEach(element => {
                                if (!element.hasAttribute('tabindex')) {
                                    element.setAttribute('tabindex', -1);
                                }
                            });
                        }

                        colSpan > 0 ? rowCells.push(...this.createFilledArray(colSpan, cell)) : rowCells.push(cell);
                    }
                );

                if (rowCells.length) {
                    this.grid.push(rowCells);
                }
            }
        );
    };

    createFilledArray = (length, value) => {
        const array = [];
        while (length--) {
            array.push(value);
        }
        return array;
    }

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
        const cell = {
            row: cellCoordinates.row,
            col: cellCoordinates.col,
            element: element
        };
        cell.focusableElements = cell.element.querySelectorAll(GridSelector.FOCUSABLE);
        cell.editableElement = cell.element.querySelector(GridSelector.EDITABLE);

        return cell;
    }

    getCellCoordinates = (element) => {
        for (let row = 0; row < this.grid.length; row++) {
            for (let col = 0; col < this.grid[row].length; col++) {
                if (this.grid[row][col] === element || this.grid[row][col].contains(element)) {
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

    isEditableCell = ({ focusableElements, editableElement }) => {
        return (focusableElements && (focusableElements.length > 1 || editableElement));
    }

    focusCell = ({ row, col, element, focusableElements }) => {
        this.setFocusPointer(row, col);
        if (
            focusableElements &&
            focusableElements.length === 1 &&
            !focusableElements[0].matches(GridSelector.EDITABLE)
        ) {
            focusableElements[0].focus();
        } else if (this.editMode) {
            element.setAttribute('tabindex', -1);
            focusableElements[0].focus();
        } else {
            element.focus();
        }
    };

    toggleEditMode = (currentCell, enable) => {
        if (enable) {
            this.editMode = true;
            // toggle tabbability of focusable elements
            currentCell.focusableElements.forEach(element => {
                element.setAttribute('tabindex', 0);
            });
            currentCell.element.setAttribute('tabindex', -1);
        } else {
            this.editMode = false;
            currentCell.focusableElements.forEach(element => {
                element.setAttribute('tabindex', -1);
            });
            currentCell.element.setAttribute('tabindex', 0);
        }
    }

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
            case keycode.codes.enter:
                if (this.isEditableCell(currentCell)) {
                    this.toggleEditMode(currentCell, !this.editMode);
                }
                break;
            case keycode.codes.esc:
                this.toggleEditMode(currentCell, false);
                break;
            case keycode.codes.tab:
                if (!this.isEditableCell(currentCell)) {
                    this.toggleEditMode(currentCell, false);
                    const nextElement = this.getNextOutsideTabbableElement(event.shiftKey);
                    nextElement && nextElement.focus();
                    event.preventDefault();
                }
                return;
            default:
                return;
        }

        if (nextCell) {
            this.focusCell(nextCell);
        }

        if (!this.editMode) {
            event.preventDefault();
        }
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
        // reset current edit state
        const currentCell = this.getCellProperties(
            this.grid[this.focusedRow][this.focusedCol],
            { row: this.focusedRow, col: this.focusedCol }
        );

        if (this.isEditableCell(currentCell) && this.editMode) {
            this.toggleEditMode(currentCell, false);
        }

        const clickedGridCell = this.getCellProperties(this.findClosestMatch(event.target, GridSelector.CELL));

        if (this.isEditableCell(clickedGridCell)) {
            this.toggleEditMode(clickedGridCell, true);
        }

        this.focusCell({
            row: clickedGridCell.row,
            col: clickedGridCell.col,
            element: clickedGridCell.element,
            focusableElements: clickedGridCell.focusableElements,
            editableElement: clickedGridCell.editableElement
        });
    };

    getNextCell = (currentCell, directionX, directionY) => {
        // directionX: 1 = right, -1 = left
        // directionY: 1 = down, -1 = up
        if (this.editMode) {
            return null;
        }

        const colSpan = currentCell.element && currentCell.element.colSpan;

        let nextCellElement = currentCell;

        if (colSpan && directionX !== 0) { // multi-column cells
            for (let i = 1; i <= colSpan; i++) {
                let candidateRow = currentCell.row + directionY;
                let candidateCol = currentCell.col + i * directionX;

                if (this.isValidCell({ row: candidateRow, col: candidateCol })
                    && this.grid[candidateRow][candidateCol] !== currentCell.element) {
                    nextCellElement = this.getCellProperties(
                        this.grid[candidateRow][candidateCol],
                        { row: candidateRow, col: candidateCol }
                    );
                    break;
                }
            }
        } else {
            const candidateRow = currentCell.row + directionY;
            const candidateCol = currentCell.col + directionX;

            if (this.isValidCell({ row: candidateRow, col: candidateCol })) {
                nextCellElement = this.getCellProperties(
                    this.grid[candidateRow][candidateCol],
                    { row: candidateRow, col: candidateCol }
                );
            }
        }

        return {
            row: nextCellElement.row,
            col: nextCellElement.col,
            element: nextCellElement.element,
            focusableElements: nextCellElement.focusableElements,
            editableElement: nextCellElement.editableElement
        };
    };

    getNextOutsideTabbableElement = (shiftKey) => {
        const tabbableElements = tabbable(document);
        let nextElement;
        tabbableElements.forEach((element, index) => {
            if (element.contains(document.activeElement)) {
                let currIndex = index;
                while (
                    currIndex > 0 &&
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
        if (element.matches(selector)) {
            return element;
        }

        if (element.parentNode) {
            return this.findClosestMatch(element.parentNode, selector);
        }

        return null;
    };
}
