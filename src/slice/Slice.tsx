import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { DummyData } from '../components/DummyData';

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
  currentUser: DummyDataInter | {};
  data: DummyDataInter[];
};

const init: initType = {
  showCard: false,
  currentUser: {},
  data: DummyData,
};

export const hoverSlice = createSlice({
  name: 'hover',
  initialState: init,
  reducers: {
    handleMouseEnter: (state, action: PayloadAction) => {
      state.showCard = true;
      state.currentUser = action.payload;
    },
    handleMouseLeave: (state) => {
      state.showCard = false;
    },
  },
});

export const { handleMouseEnter, handleMouseLeave } = hoverSlice.actions;

export default hoverSlice.reducer;
