import { localStorageMethods } from "../../shared/localStorage/LocalStorage";

export const postReducers = {
  addPost: (state: any, action: any) => {
    state.items.push(action.payload);
    localStorageMethods.updateItem("posts", state.items);
  },
  editPost: (state: any, action: any) => {
    let index = state.items.findIndex(
      (post: any) => post?.id === action?.payload?.id
    );

    state.items[index] = action.payload;
    localStorageMethods.updateItem("posts", state.items);
  },
  deletePost: (state: any, action: any) => {
    state.items = state.items.filter(
      (post: any) => post.id !== action.payload.id
    );
    localStorageMethods.updateItem("posts", state.items);
  },
};
