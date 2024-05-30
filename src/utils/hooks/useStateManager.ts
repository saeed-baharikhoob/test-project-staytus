import { useRef } from 'react';

type State = Record<string, any>;

type Listener = (state: State) => void;

export const createStateManager = (initialState: State = {}) => {
    let state: State = { ...initialState };
    let listeners: Listener[] = [];

    // Get the current state
    const getState = (): State => state;

    // Update the state
    const setState = (key: string, value: any): void => {
        state = { ...state, [key]: value };
        notifyListeners();
    };

    // Subscribe to state changes
    const subscribe = (listener: Listener): (() => void) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    };

    // Notify all listeners about state changes
    const notifyListeners = (): void => {
        listeners.forEach(listener => listener(state));
    };

    return { getState, setState, subscribe };
};

type StateManager = ReturnType<typeof createStateManager>;

const useStateManager = (initialState: State = {}): StateManager => {
    const stateManagerRef = useRef<StateManager | null>(null);

    if (!stateManagerRef.current) {
        stateManagerRef.current = createStateManager(initialState);
    }

    return stateManagerRef.current;
};

export default useStateManager;
