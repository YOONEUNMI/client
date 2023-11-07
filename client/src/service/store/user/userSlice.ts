import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface UserState {
  userId: string;
}

const initialState: UserState = {
  userId: "",
};

/**
 * @description 지도 사용 기능을 저장한 store
 */
export const UserSlice = createSlice({
  name: "userInfo",
  initialState: initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.userId = action.payload;
    },
  },
});

export const {setUserId} = UserSlice.actions;

export default UserSlice.reducer;
