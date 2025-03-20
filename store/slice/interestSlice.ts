import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchInterests } from '~/api/interest';
import { Interest, InterestStateType } from '~/types/interest';

export const rdxFetchInterest = createAsyncThunk(
  'interest/fetch',
  async ({ q, limit, from }: { q: string; limit: number; from: number }) => {
    const res = await fetchInterests(q, limit, from);
    return res;
  }
);

const initialState: InterestStateType = {
  interests: [],
  loading: false,
  pagesLeft: 0,
  query: '',
  isFocused: false,
};

const interestSlice = createSlice({
  name: 'interest',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setInterests: (state, action: PayloadAction<Interest[]>) => {
      state.interests = action.payload;
    },
    appendInterests: (state, action: PayloadAction<Interest[]>) => {
      const newItems = action.payload;
      const existingNames = new Set(state.interests.map((i) => i.name.toLowerCase()));
      const filteredItems = newItems.filter((item) => !existingNames.has(item.name.toLowerCase()));
      state.interests = [...state.interests, ...filteredItems];
    },
    setPagesLeft: (state, action: PayloadAction<number>) => {
      state.pagesLeft = action.payload;
    },
    setFocused: (state, action: PayloadAction<boolean>) => {
      state.isFocused = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(rdxFetchInterest.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(rdxFetchInterest.fulfilled, (state, action) => {
      state.loading = false;
      state.interests = action.payload.autocomplete;
      state.pagesLeft = action.payload.pages_left;
    });
    builder.addCase(rdxFetchInterest.rejected, (state) => {
      state.loading = false;
      console.log('Error fetching interests');
    });
  },
});

export const { setQuery, setInterests, appendInterests, setPagesLeft, setFocused } =
  interestSlice.actions;

export default interestSlice.reducer;
