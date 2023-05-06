import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Users from './pages/Users';
import { Route, Routes } from 'react-router-dom';
import Companies from './pages/Companies';
import Header from './components/Header';
import Home from './pages/Home';


function App() {
  return (
    <div className="container">
    <Header/>
    <Routes>
    <Route path="/" element={<Home />} />
    
    
  </Routes>
    <Button as="a" variant="primary">
    Button as link
  </Button>
      {/*<Users />*/}
      <Companies />
    </div>
  );
}

export default App;
