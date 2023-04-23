import { createSlice } from "@reduxjs/toolkit";
import { localStorageMethods } from "../../shared/localStorage/LocalStorage";
import { postReducers } from "./reducers";

const postsinitialState =
  localStorageMethods.getItem("posts") !== null &&
  localStorageMethods.getItem("posts") !== undefined
    ? localStorageMethods.getItem("posts")
    : localStorageMethods.addIetm("posts", []);

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    items: postsinitialState || [],
  },
  reducers: postReducers,
});
export const { addPost, editPost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;
