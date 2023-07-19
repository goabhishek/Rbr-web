import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './componenets/Header';
import Footer from './componenets/Footer';
import Register from './pages/register';
import Login from './pages/login';
import ProfileFirst from './pages/profile/ProfileFirst';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} /> {/* 👈 Renders at /app/ */}
        <Route path='/Register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/ProfileFirst' element={<ProfileFirst />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
