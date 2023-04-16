import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ISearchState } from "../interfaces/state";

const initialState: ISearchState = {
  query: "",
  characters: [],
  isLoading: false,
  error: null,
};

export const fetchCharactersByQuery = createAsyncThunk(
  "fetchCharactersByQuery",
  async (query: string) => {
    const response: Response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${query}`
    );
    return response.json();
  }
);

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
      state.characters = action.payload.results;
    });
  },
});

export const { setQuery } = charactersSlice.actions;
export default charactersSlice.reducer;
