import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import companiesService from './companiesService';

const { getCompanies, createCompany, deleteGoal } = companiesService;

export const getComps = createAsyncThunk('comps/getComps', getCompanies);

// Create new goal
export const createComp = createAsyncThunk(
  'goals/create',
  async (goalData, thunkAPI) => {
    try {
      return await createCompany(goalData);
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

// Delete user goal
export const deleteComp = createAsyncThunk(
  'goals/delete',
  async (id, thunkAPI) => {
    try {
      return await deleteGoal(id);
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

const companySlice = createSlice({
  name: 'comps',
  initialState: {
    comps: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getComps.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getComps.fulfilled, (state, action) => {
        state.loading = false;
        state.comps = action.payload;
      })
      .addCase(getComps.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(createComp.pending, (state) => {
        state.loading = true;
      })
      .addCase(createComp.fulfilled, (state, action) => {
        state.loading = false;
        state.comps.push(action.payload);
      })
      .addCase(createComp.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(deleteComp.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteComp.fulfilled, (state, action) => {
        state.loading = false;
        state.comps = state.comps.filter(
          (goal) => goal._id !== action.payload.id
        );
      })
      .addCase(deleteComp.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      });
  },
});

export default companySlice.reducer;
