import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const namespace = 'global';


export const fetchXxx = createAsyncThunk(`${namespace}/xxx`, async () => {
  // 你的逻辑
});

const initialState = {
  user: {
    project2name: 'single-spa-react',
    age: '4',
  }
}

// 创建带有命名空间的reducer
const stateSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchXxx.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchXxx.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(fetchXxx.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const selectGlobal = (state) => state.global;
export default stateSlice.reducer;
