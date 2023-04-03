import { createSlice } from "@reduxjs/toolkit";
import tuits from "./tuits.json";
import {
  createTuitThunk,
  deleteTuitThunk,
  findTuitsThunk,
  updateTuitThunk,
} from "../../services/tuits-thunks";

const initialState = {
  tuits: [],
  loading: false,
};

const currentUser = {
  name: "NASA",
  userName: "nasa",
  icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png",
};

const templateTuit = {
  ...currentUser,
  category: 4,
  preview: "",
  previewTitle: "",
  previewText: "",
  previewLink: "",
  topic: "Space",
  time: "2h",
  liked: false,
  comment: 0,
  retuit: 0,
  likes: 0,
};

const tuitsSlice = createSlice({
  name: "tuits",
  initialState: tuits,
  initialState,
  extraReducers: {
    [findTuitsThunk.pending]: (state) => {
      state.loading = true;
      state.tuits = [];
    },
    [findTuitsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = payload;
    },
    [findTuitsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [deleteTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = state.tuits.filter((t) => t._id !== payload);
    },
    [createTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits.unshift(payload);
    },
    [updateTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id);
      state.tuits[tuitNdx] = {
        ...state.tuits[tuitNdx],
        ...payload,
      };
    },
  },
  reducers: {},
});
export const { createTuit, deleteTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;
