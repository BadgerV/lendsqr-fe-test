import { configureStore, combineReducers } from "@reduxjs/toolkit";
import UserInfoSlice from "./UserInfoSlice/UserInfoSlice";

export const store = configureStore({
  reducer: {
    UserInfoSlice: UserInfoSlice,
  },
});

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  UserInfoSlice: UserInfoSlice,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>;

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
