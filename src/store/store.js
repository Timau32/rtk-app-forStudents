import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/CounterSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
});

const setupStore = () => configureStore({ reducer: rootReducer });
export default setupStore;
