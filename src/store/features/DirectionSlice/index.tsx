import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DirectionState {
  value: "ltr" | "rtl";
}

const initialState: DirectionState = {
  value: "ltr",
};

const directionSlice = createSlice({
  name: "direction",
  initialState,
  reducers: {
    changeDirection: (state, action: PayloadAction<"ltr" | "rtl">) => {
      state.value = action.payload;
    },
  },
});

export const { changeDirection } = directionSlice.actions;
export default directionSlice.reducer;
