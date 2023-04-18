import { createSlice } from "@reduxjs/toolkit";
import { IFeedbackState } from "../interfaces/state";

const initialState: IFeedbackState = {
  list: [],
};

const feedbacksSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    addNewFeedback: (state: IFeedbackState, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addNewFeedback } = feedbacksSlice.actions;
export default feedbacksSlice.reducer;
