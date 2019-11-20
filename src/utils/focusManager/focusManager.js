import keycode from 'keycode';
import tabbable from 'tabbable';
/* eslint-disable */


export default class FocusManager {
    constructor(trapNode, controlNode, useArrowKeys = false) {
        this.container = trapNode;
        this.firstOuterTabbableNode = tabbable.isTabbable(controlNode) ? controlNode : tabbable(controlNode)[0];
        this.tabbableNodes = tabbable(this.container);
        this.useArrowKeys = useArrowKeys;

        document.addEventListener('keydown', this.keyHandler, true);
    }

    isFocusContained = (e) => {
        return (e.target === window && this.container && !this.container.contains(document.activeElement));
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
            const currentIndex = this.tabbableNodes.indexOf(e.target);
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
        } else if (this.useArrowKeys && e.keyCode === keycode.codes.tab) { 
            // navigate out of component with tab when arrow-key navigation enabled
            e.preventDefault();

            const documentTabbableElements = tabbable(document);
            const nextElementIndex = documentTabbableElements.indexOf(this.firstOuterTabbableNode) + (e.shiftKey ? -1 : 1);
            this.tryFocus(documentTabbableElements[nextElementIndex]);
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
