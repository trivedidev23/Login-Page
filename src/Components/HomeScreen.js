import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import "./tablystyle.css";

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
    <div className="container" style={{ marginTop: "30px" }}>
      <Fragment>
        <table>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Email</th>
          </tr>
          {users &&
            users.map((user) => {
              return (
                <tr>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
        </table>
      </Fragment>
    </div>
  );
};

export default HomeScreen;
