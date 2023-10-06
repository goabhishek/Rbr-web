import { createSlice } from '@reduxjs/toolkit';

const fname = JSON.parse(localStorage.getItem('fname'));

const initialState = {
  isLoggedIn: false,
  name: fname ? fname : '',
  user: {
    fname: '',
    email: '',
    phone: '',
    bio: '',
    photo: '',
  },
  token: '',
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    SET_LOGIN(state, action) {
      state.isLoggedIn = action.payload;
    },
    SET_NAME(state, action) {
      localStorage.setItem('fname', JSON.stringify(action.payload));
      state.name = action.payload;
    },
    SET_USER(state, action) {
      const profile = action.payload;
      state.user.fname = profile.fname;
      state.user.email = profile.email;
      state.user.phone = profile.phone;
      state.user.bio = profile.bio;
      state.user.photo = profile.photo;
    },
  },
  extraReducers: {},
});

export const { SET_LOGIN, SET_NAME, SET_USER } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectName = (state) => state.auth.name;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
