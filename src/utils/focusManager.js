import keycode from 'keycode';
import tabbable from 'tabbable';

export default class FocusManager {
    constructor(trapNode, enableTrapNode = true) {
        this.container = trapNode;
        this.tabbableNodes = tabbable(this.container);
        this.enableTrapNode = enableTrapNode;
        this.focusElm;

        if (this.enableTrapNode) {
            this.setupTrapListeners();
            this.trapElement = this.injectTrapElement();
            this.tryFocus(this.trapElement);
        } else {
            this.tryFocus(this.tabbableNodes[0]);
        }
    }

    checkTrapNode = () => {
        if (!document.body.contains(this.container)) {
            this.remove();
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

    focusHander = () => {
        this.checkTrapNode();
    };

    handleTab = (e) => {
        this.update();
        let currentIndex = this.findParentTabbableElement(e.target),
            lastNode = this.tabbableNodes[this.tabbableNodes.length - 1],
            firstNode = this.tabbableNodes[0];

        // loop focus to last node from first for shift + tab
        // regular tabbing allowed to pass through browser UI and forced
        // to first node with ensureFocusTrapped()
        if (e.shiftKey) {
            if (this.tabbableNodes[currentIndex] === firstNode) {
                this.tryFocus(lastNode);
            } else {
                this.tryFocus(this.tabbableNodes[currentIndex - 1]);
            }
            e.preventDefault();
        }
    }

    injectTrapElement = () => {
        let trapElement = document.createElement('span');
        trapElement.tabIndex = '-1';
        trapElement.className = 'cnqr-trap-element';
        trapElement.style.outline = 'none';

        this.container.insertBefore(trapElement, this.container.childNodes[0]);

        return trapElement;
    }

    keyHandler = (e) => {
        this.checkTrapNode();

        if (e.keyCode === keycode.codes.tab) {
            this.handleTab(e);
        }
    };

    ensureFocusTrapped = (e) => {
        // re-entering page from browser UI
        if (e.target === window && this.container && !this.container.contains(document.activeElement)) {
            this.tryFocus(this.tabbableNodes[0]);
        }
    }

    remove = () => {
        this.removeTrapListeners();

        if (this.trapElement && this.container.contains(this.trapElement)) {
            this.container.removeChild(this.trapElement);
        }
    }

    removeTrapListeners = () => {
        window.removeEventListener('focus', this.ensureFocusTrapped, true);
        document.removeEventListener('focus', this.focusHander, true);
        document.removeEventListener('keydown', this.keyHandler, true);
    }

    setupTrapListeners = () => {
        window.addEventListener('focus', this.ensureFocusTrapped, true);
        document.addEventListener('focus', this.focusHander, true);
        document.addEventListener('keydown', this.keyHandler, true);
    }

    tryFocus = (node) => {
        if (node) {
            let posX = window.pageXOffset, posY = window.pageYOffset;
            node.focus();
            this.focusElm = node;
            window.scrollTo(posX, posY);
        }
    }

    update = () => {
        this.tabbableNodes = tabbable(this.container);
    }
}
