import { configureStore } from "@reduxjs/toolkit";
import UserInfoSlice from "./UserInfoSlice/UserInfoSlice";

export const store = configureStore({
  reducer: {
    UserInfoSlice: UserInfoSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
