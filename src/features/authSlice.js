import { createSlice } from '@reduxjs/toolkit';

const intialState = {
  //   userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
};
const authSlice = createSlice({
  name: 'auth',
  intialState,
  reducers: {
    // setCredentials: (state, action) => {
    //   state.userInfo = action.payload;
    //   localStorage.setItem('userInfo', JSON.stringify(action.payload));
    // },
    // logout: (state, action) => {
    //   state.userInfo = null;
    //   localStorage.removeItem('userInfo');
    // },
  },
  extraReducers: {},
});
// export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
