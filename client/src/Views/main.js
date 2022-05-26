import axios from "axios";
import React, { useState, useEffect } from "react";

const Users = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users")
      .then((allUsers) => {
        console.log(allUsers.data.user);
        setUsers(allUsers.data.user);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      {users
        ? users.map((user, index) => (
            <>
              <p>{user.firstName}</p>
              <p>{user.lastName}</p>
              <p>{user.email}</p>
            </>
          ))
        : "Awaiting Users"}
    </div>
  );
};

export default Users;
