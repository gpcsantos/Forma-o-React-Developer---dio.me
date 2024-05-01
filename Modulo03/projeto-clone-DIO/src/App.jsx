import Home from './pages/home';
import Login from './pages/login';
import Feed from './pages/feed';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/feed' element={<Feed />} />
      <Route path='*' element={<h1>NotFund</h1>} />
    </Routes>
  );
}

export default App;
