import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    test: (state: Object = {list: []}) => ({ ...state }),
});
