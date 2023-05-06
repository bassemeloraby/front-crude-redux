import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import companiesService from './companiesService';

const { getCompanies } = companiesService;

export const getComps = createAsyncThunk('companies/getComps', getCompanies);

const postSlice = createSlice({
  name: 'companies',
  initialState: {
    posts: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getComps.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getComps.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(getComps.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default postSlice.reducer;
