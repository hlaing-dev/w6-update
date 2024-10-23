import { createSlice } from "@reduxjs/toolkit";

interface model {
  openAuthModel: boolean;
}

const initialState: model = {
  openAuthModel: false,
};

export const modelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    setAuthModel: (state, action) => {
      state.openAuthModel = action.payload;
    },
  },
});

export const { setAuthModel } = modelSlice.actions;

export default modelSlice.reducer;
