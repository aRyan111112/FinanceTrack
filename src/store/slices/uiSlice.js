import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  role: 'viewer',
  search: '',
  filterType: 'all',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setFilterType: (state, action) => {
      state.filterType = action.payload;
    },
  },
});

export const { setRole, setSearch, setFilterType } = uiSlice.actions;
export default uiSlice.reducer;
