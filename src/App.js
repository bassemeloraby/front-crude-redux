import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const userList = useSelector((state) => state.users.value);

  return (
    <div className="App">
      <div className="addUser">
        <input type="text" placeholder="Name..." />
        <input type="text" placeholder="Username..." />
        <button>Add User</button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <div>
              <h1> {user.name}</h1>
              <h1> {user.username}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
