import '../index';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser,deleteUser,updateUsername } from '../features/Users';

function Users() {
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.users.value);
  
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [newUsername, setNewUsername] = useState("");
  return (
    <div>   <div className="addUser">
    <input
      type="text"
      placeholder="Name..."
      onChange={(event) => {
        setName(event.target.value);
      }}
    />
    <input
      type="text"
      placeholder="Username..."
      onChange={(event) => {
        setUsername(event.target.value);
      }}
    />
    <button
      onClick={() => {
        dispatch(
          addUser({
            id: userList[userList.length - 1].id + 1,
            name,
            username,
          })
        );
      }}
    >
      Add User
    </button>
  </div>
  <div className="displayUsers">
    {userList.map((user) => {
      return (
        <div key={user.id}>
          <h1> {user.name}</h1>
          <h1> {user.username}</h1>
          <input
            type="text"
            placeholder="New Username..."
            onChange={(event) => {
              setNewUsername(event.target.value);
            }}
          />
          <button
            onClick={() => {
              dispatch(
                updateUsername({ id: user.id, username: newUsername })
              );
            }}
          >
            {" "}
            Update Username
          </button>
          <button
            onClick={() => {
              dispatch(deleteUser({ id: user.id }));
            }}
          >
            Delete User
          </button>
        </div>
      );
    })}
  </div></div>
  )
}

export default Users