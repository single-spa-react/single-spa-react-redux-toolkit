import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const namespace = 'global';


export const fetchXxx = createAsyncThunk(`${namespace}/xxx`, async () => {
  // 接口请求，你的逻辑等等
  return {
    name: 'single-spa-react-redux-toolkit',
    age: 4
  }
});

const initialState = {
  user: {
    name: 'single-spa-react',
    age: '3',
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
      .addCase(fetchXxx.fulfilled, (state, { payload }) => ({
        loading: false,
        user: {
          ...state.user,
          ...payload,
        }
        
      }))
      .addCase(fetchXxx.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const selectGlobal = (state) => state.global;
export default stateSlice.reducer;
