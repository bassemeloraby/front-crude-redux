import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
// import Users from './pages/Users';

import Companies from './pages/Companies';


function App() {
  return (
    <div className="App">
    <Button as="a" variant="primary">
    Button as link
  </Button>
      {/*<Users />*/}
      <Companies />
    </div>
  );
}

export default App;
