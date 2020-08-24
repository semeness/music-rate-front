import { createStore } from 'redux';
import { rootReducer } from "app/reducers";

export function createAppStore() {
    return createStore(rootReducer);
}
