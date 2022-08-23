import { UserData } from "@/models/user.model";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";


interface UserState {
    username: string;
    accessToken: string;
    error?: string;
    isAuthenticated: boolean;
    isAuthenticating: boolean;
    user?: UserData;
  }


  const initialState: UserState = {
    username: "jirasak keawdham",
    accessToken: "",
    isAuthenticated: false,
    isAuthenticating: true,
    user: undefined,
  };

interface singleProp{
  newUsername:string;
}
  const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
      resetUsername:(state,action:PayloadAction<singleProp>)=>{
        state.username= action.payload.newUsername;
      },
    },
    extraReducers: (builder) => {},
  });
export const {resetUsername} =userSlice.actions;
// export common user selector
  export const userSelector = (store: RootState) => store.user;
  // // export reducer
export default userSlice.reducer;