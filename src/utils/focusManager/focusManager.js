import keycode from 'keycode';
import tabbable from 'tabbable';

export default class FocusManager {
    constructor(trapNode) {
        this.container = trapNode;
        this.tabbableNodes = tabbable(this.container);

        document.addEventListener('keydown', this.keyHandler, true);

        this.tryFocus(this.tabbableNodes[0]);
    }

    checkTrapNodeExists = () => {
        if (!document.body.contains(this.container)) {
            document.removeEventListener('keydown', this.keyHandler, true);
        }
    }

    findParentTabbableElement = (target) => {
        let index = this.tabbableNodes.indexOf(target);

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

    handleTab = (e) => {
        e.preventDefault();

        this.tabbableNodes = tabbable(this.container);
        const currentIndex = this.findParentTabbableElement(e.target);
        const lastNode = this.tabbableNodes[this.tabbableNodes.length - 1];
        const firstNode = this.tabbableNodes[0];

        if (e.shiftKey) {
            if (this.tabbableNodes[currentIndex] === firstNode) {
                this.tryFocus(lastNode);
            } else {
                this.tryFocus(this.tabbableNodes[currentIndex - 1]);
            }
        } else {
            if (this.tabbableNodes[currentIndex] === lastNode) {
                this.tryFocus(firstNode);
            } else {
                this.tryFocus(this.tabbableNodes[currentIndex + 1]);
            }
        }
    }

    keyHandler = (e) => {
        this.checkTrapNodeExists();

        if (e.keyCode === keycode.codes.tab) {
            this.handleTab(e);
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
