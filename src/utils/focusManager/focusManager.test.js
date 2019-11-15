import FocusManager from './focusManager';

const ce = global.document.createElement;

// limitation with jest and 'offsetParent': https://github.com/jsdom/jsdom/issues/1261#issuecomment-362928131
Object.defineProperty(HTMLElement.prototype, 'offsetParent', {
    get() {
        return this.parentNode;
    }
});

describe('focus manager', () => {
    beforeAll(() => {
        global.document.createElement = function() {
            const [type] = arguments;
            const element = ce.apply(this, arguments);
            if (type === 'a') {
                element.setAttribute('tabIndex', 0);
            }
            return element;
        };
    });

    afterAll(() => {
        global.document.createElement = ce;
    });

    const createNode = () => {
        const div = document.createElement('div');
        const a1 = document.createElement('a');
        const a2 = document.createElement('a');
        const a3 = document.createElement('a');
        const a4 = document.createElement('a');
        const span = document.createElement('span');

        div.id = 'mainDiv';

        div.appendChild(a1);
        div.appendChild(a2);
        div.appendChild(span);
        div.appendChild(a3);

        span.appendChild(a4);
        return div;
    };

    describe('Default Behavior', () => {
        it('should have tabbable elements', () => {
            const manager = new FocusManager(createNode());

            expect(manager.tabbableNodes.length).toEqual(4);
        });

        it('should focus on nodes via tryFocus', () => {
            const node = createNode();
            const manager = new FocusManager(node);
            const link = node.querySelector('a');

            manager.tryFocus(node);

            expect(document.activeElement).toEqual(link);
        });
    });

    describe('Event Behavior', () => {
        it('should handle tabbing back 1 element', () => {
            const node = createNode();
            const manager = new FocusManager(node);

            const anchors = node.querySelectorAll('a');
            const a1 = anchors[0];
            const a2 = anchors[1];

            const event = {
                preventDefault: () => {},
                shiftKey: true,
                target: a2
            };

            manager.handleTab(event);

            expect(document.activeElement).toEqual(a1);
        });

        it('should handle tabbing forward 1 element', () => {
            const node = createNode();
            const manager = new FocusManager(node);

            const anchors = node.querySelectorAll('a');
            const a2 = anchors[1];
            const a3 = anchors[2];

            const event = {
                preventDefault: () => {},
                shiftKey: false,
                target: a2
            };

            manager.handleTab(event);

            expect(document.activeElement).toEqual(a3);
        });

        it('should redirect to the last element when on first element', () => {
            const node = createNode();
            const manager = new FocusManager(node);

            const anchors = node.querySelectorAll('a');
            const a1 = anchors[0];
            const a4 = anchors[3];

            const event = {
                preventDefault: () => {},
                shiftKey: true,
                target: a1
            };

            manager.handleTab(event);

            expect(document.activeElement).toEqual(a4);
        });

        it('should redirect to the first element when on last element', () => {
            const node = createNode();
            const manager = new FocusManager(node);

            const anchors = node.querySelectorAll('a');
            const a1 = anchors[0];
            const a4 = anchors[3];

            const event = {
                preventDefault: () => {},
                shiftKey: false,
                target: a4
            };

            manager.handleTab(event);

            expect(document.activeElement).toEqual(a1);
        });
    });
});
