import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from './slices/transactionSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    transactions: transactionReducer,
    ui: uiReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();

  localStorage.setItem('transactions', JSON.stringify(state.transactions.list));
});
