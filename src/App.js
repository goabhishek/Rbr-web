import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './componenets/Header';
import Footer from './componenets/Footer';
import Register from './pages/register';
import Login from './pages/login';
import ProfileFirst from './pages/profile/ProfileFirst';
import ForgetPassword from './pages/profile/ForgetPassword';
import VerificatioPage from './pages/profile/VerificatioPage';
import ResetPage from './pages/profile/ResetPage';
import Callme from './pages/profile/Callme';
import HeroContent from './pages/profile-walls/HeroContent';
import { NotFound } from './componenets/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getLoginStatus } from './services/authServices';
import { SET_LOGIN } from './features/authSlice';

// import UserHeader from './user/Header/UserHeader';
// import EditProfile from './user/EditProfile';

function App({ t }) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.alerts);
  useEffect(() => {
    async function loginStatus() {
      const status = await getLoginStatus();
      dispatch(SET_LOGIN(status));
    }
    loginStatus();
  }, [dispatch]);
  //   const toast = useToast();
  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} /> {/* 👈 Renders at /app/ */}
        <Route path='/Register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/ProfileFirst' element={<ProfileFirst />} />
        <Route path='/ForgetPassword' element={<ForgetPassword />} />
        <Route path='/VerificatioPage' element={<VerificatioPage />} />
        <Route path='/ResetPage' element={<ResetPage />} />
        <Route path='/Callme' element={<Callme />} />
        <Route path='/HeroContent' element={<HeroContent />} />
        <Route path='*' element={<NotFound />} />
        {/* <Route path='/UserHeader' element={<UserHeader />} /> */}
        {/* <Route path='/EditProfile' element={<EditProfile />} /> */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
