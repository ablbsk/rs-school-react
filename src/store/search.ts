import { createSlice } from "@reduxjs/toolkit";
import { ISearchState } from "../interfaces/state";
import { fetchCharactersByQuery } from "../services";

const initialState: ISearchState = {
  query: "",
  characters: [],
  isLoading: false,
  error: null,
};

const charactersSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state: ISearchState, action) => {
      state.isLoading = true;
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharactersByQuery.fulfilled, (state: ISearchState, action) => {
      state.isLoading = false;
      state.characters = action.payload.results ? action.payload.results : [];
    });
  },
});

export const { setQuery } = charactersSlice.actions;
export default charactersSlice.reducer;
