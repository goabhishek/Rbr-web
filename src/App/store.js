import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/authSlice';
// import { postsReducer } from '../features/postsSlice';
const store = configureStore({
  reducer: {
    auth: authSlice,
    // posts: postsReducer,
  },
});
export default store;
