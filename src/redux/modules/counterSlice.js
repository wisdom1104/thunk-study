// src/redux/modules/counterSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const __addNumber = createAsyncThunk(
  // 첫번째 인자 : action value
  "addNumber",
  // 두번째 인자 : 콜백함수
  (payload, thunkAPI) => {
    // 함수에서도 두 인자를 가진다.
    // 하나는 컴포넌트에서 보내준 payload이고, 하나는 thunk에서 제공하는 기능이다.
    setTimeout(() => {
      thunkAPI.dispatch(addNumber(payload));
    }, 3000);
  }
);

export const __minusNumber = createAsyncThunk(
  // 첫번째 인자 : action value
  "minusNumber",
  // 두번째 인자 : 콜백함수
  (payload, thunkAPI) => {
    // 함수에서도 두 인자를 가진다.
    // 하나는 컴포넌트에서 보내준 payload이고, 하나는 thunk에서 제공하는 기능이다.
    setTimeout(() => {
      thunkAPI.dispatch(minusNumber(payload));
    }, 3000);
  }
);

const initialState = {
  number: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.number = state.number + action.payload;
    },

    minusNumber: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
});

export const { addNumber, minusNumber } = counterSlice.actions;
export default counterSlice.reducer;
