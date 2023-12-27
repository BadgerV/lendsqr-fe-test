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

    console.log(response);
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
      console.log(state.page);
    },
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    setUser: (state, action) => {
      const user = state.page.find((user: User) => user.id === action.payload);

      state.userInfo = user;
      console.log(state.userInfo);
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
      })
      .addCase(fetchUserData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { nextPage, prevPage, getPage, setPageNumber, setUser } =
  UserInfoSlice.actions;
export default UserInfoSlice.reducer;
