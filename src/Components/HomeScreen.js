import React, { useEffect, useState } from "react";

const HomeScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://reqres.in/api/users");
      const json = await res.json();
      setUsers(json.data);
    };
    fetchData();
  }, []);
  console.log(users);
  return (
    <div className="container">
      {users &&
        users.map((user) => {
          return (
            <div key={user.id}>
              <img src={user.avatar} alt={user.first_name} />
              <h1>
                {user.first_name} {user.last_name}
              </h1>
            </div>
          );
        })}
    </div>
  );
};

export default HomeScreen;
