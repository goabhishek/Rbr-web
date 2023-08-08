import { configureStore } from '@reduxjs/toolkit';
// import userDetail from '../features/userDetailSlice';
import authReducer from '../features/authSlice';
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});
export default store;
