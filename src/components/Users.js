import { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState([]);
  const [email, setEmail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      <h1>Users</h1>

      {isLoading && <div>Loading...</div>}
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}

      <h1>Usernames</h1>

      {isLoading && <div>Loading...</div>}
      {users.map((username) => (
        <div key={username.id}>{username.username}</div>
      ))}

      <h1>Emails</h1>

      {isLoading && <div>Loading...</div>}
      {users.map((email) => (
        <div key={email.id}>{email.email}</div>
      ))}
    </div>
  );
}

export default Users;
