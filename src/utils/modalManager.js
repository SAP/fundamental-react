import ModalManager from 'react-overlays/ModalManager';

let modalManager;

export const getModalManager = () => {
    if (modalManager) {
        return modalManager;
    }
    modalManager = new ModalManager({ hideSiblingNodes: false, handleContainerOverflow: false });
    return modalManager;
};
