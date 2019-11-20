import keycode from 'keycode';
import tabbable from 'tabbable';

export default class FocusManager {
    constructor(trapNode, useArrowKeys = false) {
        this.container = trapNode;
        this.tabbableNodes = tabbable(this.container);
        this.useArrowKeys = useArrowKeys;

        document.addEventListener('keydown', this.keyHandler, true);
    }

    isFocusContained = (e) => {
        return (e.target === window && this.container && !this.container.contains(document.activeElement));
    }

    findParentTabbableElement = (target) => {
        const index = this.tabbableNodes.indexOf(target);

        if (index >= 0) {
            return index;
        } else {
            if (target.parentNode) {
                return this.findParentTabbableElement(target.parentNode);
            } else {
                return -1;
            }
        }
    }

    keyHandler = (e) => {
        if (!document.body.contains(this.container)) {
            document.removeEventListener('keydown', this.keyHandler, true);
            return;
        }

        const isPreviousKey = (this.useArrowKeys && e.keyCode === keycode.codes.up) ||
            (!this.useArrowKeys && e.keyCode === keycode.codes.tab && e.shiftKey);

        const isNextKey = (this.useArrowKeys && e.keyCode === keycode.codes.down) ||
            (!this.useArrowKeys && e.keyCode === keycode.codes.tab);

        if (isPreviousKey || isNextKey) {
            e.preventDefault();

            if (!this.isFocusContained(e)) {
                this.tryFocus(this.tabbableNodes[0]);
            }

            this.tabbableNodes = tabbable(this.container);
            const currentIndex = this.findParentTabbableElement(e.target);
            const lastNode = this.tabbableNodes[this.tabbableNodes.length - 1];
            const firstNode = this.tabbableNodes[0];

            if (isPreviousKey) {
                if (this.tabbableNodes[currentIndex] === firstNode) {
                    this.tryFocus(lastNode);
                } else {
                    this.tryFocus(this.tabbableNodes[currentIndex - 1]);
                }
            } else if (isNextKey) {
                if (this.tabbableNodes[currentIndex] === lastNode) {
                    this.tryFocus(firstNode);
                } else {
                    this.tryFocus(this.tabbableNodes[currentIndex + 1]);
                }
            }
        }
    };

    tryFocus = (node) => {
        if (node) {
            const posX = window.pageXOffset;
            const posY = window.pageYOffset;
            node.focus();
            window.scrollTo(posX, posY);
        }
    }
}
