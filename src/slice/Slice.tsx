import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
export interface DummyDataInter {
  _id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  active: boolean;
  owner: boolean;
  role: string;
  removable: string | boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export type initType = {
  [x: string]: any;
  showCard: boolean;
  currentUser: DummyDataInter;
  data: DummyDataInter[];
};

const init: initType = {
  showCard: false,
  currentUser: {
    _id: "",
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
    active: false,
    owner: false,
    role: "",
    removable: "",
    createdAt: "",
    updatedAt: "",
    __v: 0,
  },
  data: [],
  panding: true,
};
export const getUserName = createAsyncThunk(
  "account/getUser",
  async (pageNumber: number) => {
    const response = await axios.get(
      `https://servers-omega.vercel.app/users/p?limit=8&page=${pageNumber}`
    );
    return [...response.data.users];
  }
);
export const hoverSlice = createSlice({
  name: "hover",
  initialState: init,
  reducers: {
    handleMouseEnter: (state, action: PayloadAction<DummyDataInter>) => {
      state.showCard = true;
      state.currentUser = action.payload;
    },
    handleMouseLeave: (state) => {
      state.showCard = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserName.fulfilled, (state, action) => {
        state.data = action.payload;
        state.panding = false;
      })
      .addCase(getUserName.pending, (state) => {
        state.panding = true;
      })
      .addCase(getUserName.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export const { handleMouseEnter, handleMouseLeave } = hoverSlice.actions;

export default hoverSlice.reducer;
