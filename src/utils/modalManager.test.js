import { getModalManager } from './modalManager';

describe('modal manager', () => {
    it('is a singleton created on demand', () => {
        const manager1 = getModalManager();
        const manager2 = getModalManager();
        expect(manager1).toBe(manager2);
    });
});
