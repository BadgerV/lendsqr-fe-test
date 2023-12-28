// Import necessary dependencies
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { State, User } from "../../types";

// Define initial state for the user information
const initialState: State = {
  usersInfo: [],
  isLoading: false,
  pageNumber: 1,
  page: [],
  userInfo: {},
  itemsPerPage: 9,
  loggedInUser: localStorage.getItem("loggedInUser"),
};

// Define an asynchronous thunk to fetch user data
export const fetchUserData = createAsyncThunk("/fetch-data", async () => {
  try {
    const response = await axios.get(
      "https://113a0d0c-14a3-494b-9420-94e0dc7db317.mock.pstmn.io/lendsqr-mock-api"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    // Re-throw the error to propagate it to the calling code
    throw error;
  }
});

// Create a slice for managing user information
const UserInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    // Increment the page number if not at the maximum
    nextPage: (state) => {
      if (state.pageNumber !== 56) {
        state.pageNumber++;
      } else {
        return;
      }
    },
    // Decrement the page number if not at the minimum
    prevPage: (state) => {
      if (state.pageNumber !== 1) {
        state.pageNumber--;
      }
    },
    // Update the current page based on the page number and items per page
    getPage: (state) => {
      const startIndex = (state.pageNumber - 1) * state.itemsPerPage;
      const endIndex = startIndex + state.itemsPerPage;
      state.page = state.usersInfo.slice(startIndex, endIndex);
    },
    // Set the page number to a specific value
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    // Set the selected user and store in local storage
    setUser: (state, action) => {
      const userId = action.payload;
      const user = state.page.find((user: User) => user.id === userId);

      if (user) {
        state.userInfo = user;
        localStorage.setItem("userInfo", JSON.stringify(user));
      } else {
        console.warn(`User with id ${userId} not found.`);
      }
    },
    // Set the entire usersInfo array
    setUsersInfo: (state, action) => {
      state.usersInfo = action.payload;
    },
    //set loggedin user
    setLoggedInUser: (state, action) => {
      localStorage.setItem("loggedInUser", action.payload);
      state.loggedInUser = action.payload;
    },
    //logout user
    logoutUser: (state) => {
      localStorage.removeItem("loggedInUser");
      state.loggedInUser = null;
    },
  },
  // Handle extra reducers for the asynchronous data fetching
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
        console.error("Error fetching user data.");
      });
  },
});

// Export actions and reducer from the slice
export const {
  nextPage,
  prevPage,
  getPage,
  setPageNumber,
  setUser,
  setUsersInfo,
  setLoggedInUser,
  logoutUser
} = UserInfoSlice.actions;
export default UserInfoSlice.reducer;
