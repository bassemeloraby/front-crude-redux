import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './pages/Users';
import { Route, Routes } from 'react-router-dom';
import Companies from './pages/Companies';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
