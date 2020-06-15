export default function tryFocus(node) {
    let focusElm;

    try {
        if (node) {
            let posX = window.pageXOffset,
                posY = window.pageYOffset;
            node.focus();
            focusElm = node;
            window.scrollTo(posX, posY);
        }
    } catch (e) {
        // eslint-disable-next-line no-console
        console.warn(e);
    }

    return focusElm;
}
