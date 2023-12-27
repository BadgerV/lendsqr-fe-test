import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { State, User } from "../../types";

const initialState: State = {
  usersInfo: [],
  isLoading: false,
  pageNumber: 1,
  page: [],
  userInfo: {},

  itemsPerPage: 9,
};

export const fetchUserData = createAsyncThunk("/fetch-data", async () => {
  try {
    const response = await axios.get(
      "https://113a0d0c-14a3-494b-9420-94e0dc7db317.mock.pstmn.io/lendsqr-mock-api"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const UserInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    nextPage: (state) => {
      if (state.pageNumber !== 56) {
        state.pageNumber++;
      } else {
        return;
      }
    },
    prevPage: (state) => {
      if (state.pageNumber !== 1) {
        state.pageNumber--;
      }
    },
    getPage: (state) => {
      const startIndex = (state.pageNumber - 1) * state.itemsPerPage;
      const endIndex = startIndex + state.itemsPerPage;

      state.page = state.usersInfo.slice(startIndex, endIndex);
    },
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    setUser: (state, action) => {
      const userId = action.payload;
      const user = state.page.find((user: User) => user.id === userId);

      // If a user with the given id is found, set it in state.userInfo
      if (user) {
        state.userInfo = user;
        localStorage.setItem("userInfo", JSON.stringify(user));
      } else {
        // If no user is found, you might want to handle this case
        console.log(`User with id ${userId} not found.`);
      }
    },

    setUsersInfo: (state, action) => {
      state.usersInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.usersInfo = action.payload;
        // Convert the object to a JSON string before storing in local storage
        localStorage.setItem("userData", JSON.stringify(action.payload));
      })
      .addCase(fetchUserData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {
  nextPage,
  prevPage,
  getPage,
  setPageNumber,
  setUser,
  setUsersInfo,
} = UserInfoSlice.actions;
export default UserInfoSlice.reducer;
