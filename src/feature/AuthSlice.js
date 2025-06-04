import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../constant";
axios.defaults.withCredentials = true;

const initialState = {
  loading: false,
  loggedIn: false,
  localData: [],
  data: null,
  profileData: null,
  error: null,
  status: null,
  title: "Dashboard",
  isWelcome: false,
};

export const login = createAsyncThunk("login", async (data) => {
  const response = await axios.post("/login", data);
  return response.data;
});

export const userDetails = createAsyncThunk(
  "get_profile_details",
  async (data) => {
    const response = await axios.post("/get_profile_details", data[0], {
      headers: {
        Authorization: `Bearer ${data[1]}`,
      },
    });
    return response.data;
  }
);

const AuthSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    logout: (state) => {
      state.loggedIn = false;
      state.localData = null;
      state.profileData = null;
      state.isWelcome = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        if (action.payload.status === "success") {
          state.loggedIn = true;
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(userDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(userDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.profileData = action.payload;
      })
      .addCase(userDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout } = AuthSlice.actions;
export default AuthSlice.reducer;
