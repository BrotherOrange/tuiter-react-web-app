import { createSlice } from "@reduxjs/toolkit";
import profile from "./profile.json";

const profileSlice = createSlice({
  name: "profile",
  initialState: profile,
  reducers: {
    editProfile(state, action) {
      state.name = action.payload.name;
      state.bio = action.payload.bio;
      state.location = action.payload.location;
      state.dateOfBirth = action.payload.dateOfBirth;
      state.website = action.payload.website;
    },
  },
});

export const { editProfile } = profileSlice.actions;
export default profileSlice.reducer;