import GridManager from './gridManager';
import { GridSelector } from '../constants';
import keycode from 'keycode';

const ce = global.document.createElement;

// limitation with jest and 'offsetParent': https://github.com/jsdom/jsdom/issues/1261#issuecomment-362928131
Object.defineProperty(HTMLElement.prototype, 'offsetParent', {
    get() {
        return this.parentNode;
    }
});

describe('GridManager', () => {
    let gridNode;

    const createNode = () => {
        // 4 x 4 table
        const tbl = document.createElement('table');
        tbl.id = 'mainTable';
        tbl.setAttribute('role', 'grid');
        for (let i = 0; i < 4; i++) {
            let row = tbl.insertRow();
            for (let j = 0; j < 4; j++) {
                let cell;
                if (i === 0) {
                    cell = document.createElement('th');
                    cell.appendChild(document.createTextNode(`Header ${j}`));
                } else {
                    cell = document.createElement('td');
                }
                cell.id = `cell-${i}-${j}`;
                row.appendChild(cell);
            }
        }

        const a1 = document.createElement('a');
        a1.href = '#';
        const a2 = document.createElement('a');
        a2.href = '#';
        tbl.querySelector('#cell-1-1').appendChild(a1);
        tbl.querySelector('#cell-1-3').appendChild(a2);

        const c1 = document.createElement('input');
        c1.type = 'checkbox';
        c1.id = 'checkbox-1-0';
        const c2 = document.createElement('input');
        c2.type = 'checkbox';
        c2.id = 'checkbox-3-0';
        tbl.querySelector('#cell-1-0').appendChild(c1);
        tbl.querySelector('#cell-3-0').appendChild(c2);

        const t1 = document.createElement('input');
        t1.type = 'text';
        t1.id = 'textinput-3-3';
        tbl.querySelector('#cell-3-3').appendChild(t1);

        return tbl;
    };

    const createEmptyNode = () => {
        const tbl = document.createElement('table');
        tbl.id = 'mainTable';
        tbl.setAttribute('role', 'grid');

        return tbl;
    };

    beforeAll(() => {
        global.document.createElement = function() {
            const element = ce.apply(this, arguments);
            if (element.matches(GridSelector.CELL)) {
                element.setAttribute('tabIndex', -1);
            }
            return element;
        };

        gridNode = createNode();
    });

    afterAll(() => {
        global.document.createElement = ce;
    });

    describe('Default Behavior', () => {
        it('should setup', () => {
            const manager = new GridManager({ gridNode });

            expect(manager.grid).toBeTruthy();
        });

        it('should set the correct tabindex to the first focused cell', () => {
            new GridManager({ gridNode, firstFocusedCoordinates: { row: 1, col: 2 } });

            const focusedCell = gridNode.querySelector('#cell-1-2');

            expect(focusedCell.getAttribute('tabindex')).toEqual('0');
        });

        it('should not set any pointers on empty tables', () => {
            const manager = new GridManager({});
            manager.setFocusPointer = jest.fn();
            manager.attachTo(createEmptyNode());

            expect(manager.setFocusPointer).toHaveBeenCalledTimes(0);
        });
    });

    describe('Event Behavior', () => {
        it('should handle going up 1 cell', () => {
            const manager = new GridManager({ gridNode, firstFocusedCoordinates: { row: 2, col: 2 } });

            const event = {
                preventDefault: () => {},
                target: gridNode.querySelector('#cell-2-2'),
                keyCode: keycode.codes.up
            };

            manager.handleKeyDown(event);

            expect(document.activeElement).toEqual(gridNode.querySelector('#cell-1-2'));
        });

        it('should not go up if at the top row', () => {
            const manager = new GridManager({ gridNode, firstFocusedCoordinates: { row: 0, col: 1 } });

            const event = {
                preventDefault: () => {},
                target: gridNode.querySelector('#cell-0-1'),
                keyCode: keycode.codes.up
            };

            event.target.focus();
            manager.handleKeyDown(event);

            expect(document.activeElement).toEqual(gridNode.querySelector('#cell-0-1'));
        });

        it('should handle going down 1 cell', () => {
            const manager = new GridManager({ gridNode, firstFocusedCoordinates: { row: 2, col: 2 } });

            const event = {
                preventDefault: () => {},
                target: gridNode.querySelector('#cell-2-2'),
                keyCode: keycode.codes.down
            };

            manager.handleKeyDown(event);

            expect(document.activeElement).toEqual(gridNode.querySelector('#cell-3-2'));
        });

        it('should not go down if at the bottom row', () => {
            const manager = new GridManager({ gridNode, firstFocusedCoordinates: { row: 3, col: 2 } });

            const event = {
                preventDefault: () => {},
                target: gridNode.querySelector('#cell-3-2'),
                keyCode: keycode.codes.down
            };

            manager.handleKeyDown(event);

            expect(document.activeElement).toEqual(gridNode.querySelector('#cell-3-2'));
        });

        it('should handle going left 1 cell', () => {
            const manager = new GridManager({ gridNode, firstFocusedCoordinates: { row: 2, col: 2 } });

            const event = {
                preventDefault: () => {},
                target: gridNode.querySelector('#cell-2-2'),
                keyCode: keycode.codes.left
            };

            manager.handleKeyDown(event);

            expect(document.activeElement).toEqual(gridNode.querySelector('#cell-2-1'));
        });

        it('should not go left if at the leftmost column', () => {
            const manager = new GridManager({ gridNode, firstFocusedCoordinates: { row: 2, col: 0 } });

            const event = {
                preventDefault: () => {},
                target: gridNode.querySelector('#cell-2-0'),
                keyCode: keycode.codes.left
            };

            event.target.focus();
            manager.handleKeyDown(event);

            expect(document.activeElement).toEqual(gridNode.querySelector('#cell-2-0'));
        });

        it('should handle going right 1 cell', () => {
            const manager = new GridManager({ gridNode, firstFocusedCoordinates: { row: 2, col: 2 } });

            const event = {
                preventDefault: () => {},
                target: gridNode.querySelector('#cell-2-2'),
                keyCode: keycode.codes.right
            };

            manager.handleKeyDown(event);

            expect(document.activeElement).toEqual(gridNode.querySelector('#cell-2-3'));
        });

        it('should not go right if at the rightmost column', () => {
            const manager = new GridManager({ gridNode, firstFocusedCoordinates: { row: 2, col: 3 } });

            const event = {
                preventDefault: () => {},
                target: gridNode.querySelector('#cell-2-3'),
                keyCode: keycode.codes.right
            };

            event.target.focus();
            manager.handleKeyDown(event);

            expect(document.activeElement).toEqual(gridNode.querySelector('#cell-2-3'));
        });

        it('should focus on a inner input if present', () => {
            const manager = new GridManager({ gridNode, firstFocusedCoordinates: { row: 1, col: 1 } });

            const event = {
                preventDefault: () => {},
                target: gridNode.querySelector('#cell-1-1'),
                keyCode: keycode.codes.left
            };

            manager.handleKeyDown(event);

            expect(document.activeElement).toEqual(gridNode.querySelector('#checkbox-1-0'));
        });

        it('should focus on a cell if clicked', () => {
            const manager = new GridManager({ gridNode });

            const event = {
                preventDefault: () => {},
                target: gridNode.querySelector('#cell-2-1')
            };

            manager.handleClickCell(event);

            expect(document.activeElement).toEqual(gridNode.querySelector('#cell-2-1'));
        });
    });
});
