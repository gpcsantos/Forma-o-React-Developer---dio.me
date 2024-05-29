import Home from './pages/home';
import Login from './pages/login';
import Feed from './pages/feed';
import Register from './pages/register';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/feed' element={<Feed />} />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<h1>NotFund</h1>} />
    </Routes>
  );
}

export default App;
