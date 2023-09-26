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
// import i18n from 'i18next';
// import { useTranslation, initReactI18next } from 'react-i18next';
import { withNamespaces } from 'react-i18next';

function App({ t }) {
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
      </Routes>

      <Footer />
    </div>
  );
}

export default withNamespaces()(App);
