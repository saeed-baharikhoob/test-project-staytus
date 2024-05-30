import { describe, it, expect, vi } from 'vitest';
import { createStateManager } from '../utils/hooks/useStateManager';

// Tests for the createStateManager function
describe('createStateManager', () => {
    it('should initialize with the given initial state', () => {
        const initialState = { key: 'value' };
        const stateManager = createStateManager(initialState);

        expect(stateManager.getState()).toEqual(initialState);
    });

    it('should update state correctly with setState', () => {
        const initialState = { key: 'value' };
        const stateManager = createStateManager(initialState);

        stateManager.setState('key', 'new value');

        expect(stateManager.getState()).toEqual({ key: 'new value' });
    });

    it('should notify subscribers on state change', () => {
        const initialState = { key: 'value' };
        const stateManager = createStateManager(initialState);

        const listener = vi.fn();
        const unsubscribe = stateManager.subscribe(listener);

        stateManager.setState('key', 'new value');

        expect(listener).toHaveBeenCalledWith({ key: 'new value' });

        // Unsubscribe and make sure listener is not called again
        unsubscribe();

        stateManager.setState('key', 'another new value');

        expect(listener).toHaveBeenCalledTimes(1);
    });
});
