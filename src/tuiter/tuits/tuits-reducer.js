import { createSlice } from "@reduxjs/toolkit";
import tuits from "./tuits.json";

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
  reducers: {
    deleteTuit(state, action) {
      const index = state.findIndex((tuit) => tuit._id === action.payload);
      state.splice(index, 1);
    },

    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: new Date().getTime(),
      });
    },
  },
});
export const { createTuit, deleteTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;
