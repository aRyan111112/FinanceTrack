import { createSlice } from '@reduxjs/toolkit';

const savedTransactions = localStorage.getItem('transactions');

const initialState = {
  list: savedTransactions
    ? JSON.parse(savedTransactions)
    : [
        {
          id: 1,
          date: '2024-04-20',
          category: 'Food',
          amount: -500,
          type: 'expense',
        },
        {
          id: 2,
          date: '2024-04-19',
          category: 'Salary',
          amount: 20000,
          type: 'income',
        },
      ],
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.list.push(action.payload);
    },
    deleteTransaction: (state, action) => {
      state.list = state.list.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTransaction, deleteTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
