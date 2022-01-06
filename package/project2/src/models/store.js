import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';

import global from './global';

const reducer = combineReducers({
  global,
});

const store = configureStore({
  reducer,
});


export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export default store;
