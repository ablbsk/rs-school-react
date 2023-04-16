import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCharactersByQuery } from "../services";

const initialState = {
  query: "",
  characters: [],
  isLoading: false,
  error: null,
};

export const fetchCharactersByQuery = createAsyncThunk(
  "search/fetchCharactersByQuery",
  async (query: string) => {
    const response = await getCharactersByQuery(query);
    return response.json();
  }
);

const charactersSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action): void => {
      state.query = action.payload;
    },
    extraReducers: (builder) => {
      builder.addCase(fetchCharactersByQuery.fulfilled, (state, action) => {
        state.characters = action.payload.results;
      });
    },
  },
});

export const { setQuery } = charactersSlice.actions;
export default charactersSlice.reducer;
