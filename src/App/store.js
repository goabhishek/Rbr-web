import { configureStore } from '@reduxjs/toolkit';
// import userDetail from '../features/userDetailSlice';
import authReducer from '../features/authSlice';
// import { userDetail } from '../features/userDetailSlice';
const store = configureStore({
  reducer: {
    // auth: authReducer,
    // userDetail: userDetail,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});
export default store;
