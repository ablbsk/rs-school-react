import { createSlice } from "@reduxjs/toolkit";
import { IMainState } from "../interfaces/state";
import { fetchCharactersByQuery, fetchCharacterWithEpisodes } from "../services";

const initialState: IMainState = {
  query: "rick",
  characters: [],
  modal: {
    character: null,
    isLoading: false,
  },
  isLoading: false,
  error: null,
};

const charactersSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setQuery: (state: IMainState, action) => {
      state.isLoading = state.query !== action.payload;
      state.query = action.payload;
    },
    setCharacterToModal: (state: IMainState) => {
      state.modal.isLoading = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharactersByQuery.fulfilled, (state: IMainState, action) => {
      state.isLoading = false;
      state.characters = action.payload.results ? action.payload.results : [];
    });
    builder.addCase(fetchCharacterWithEpisodes.fulfilled, (state: IMainState, action) => {
      state.modal.isLoading = false;
      state.modal.character = action.payload;
    });
  },
});

export const { setQuery, setCharacterToModal } = charactersSlice.actions;
export default charactersSlice.reducer;
