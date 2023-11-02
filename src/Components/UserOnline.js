import React from "react";
const users= [
    {
      username: 'Jai',
      online: true
    },
    {
      username: 'Priya',
      online: false
    },
    {
      username: 'Irfan',
      online: true
    },
    {
      username: 'Babu',
      online: false
    },
    {
      username: 'Sara',
      online: true
    },
    {
      username: 'Kumar',
      online: true
    }
  ]
function UserOnline(){
const usersOnline = users.filter(user => user.online === true);
const renderOnline = usersOnline.map(user => <li key={user.username}>{user.username}</li>);
      return (
        <div>
          <h1>Current Online Users:</h1>
          <ul>{renderOnline}</ul>
        </div>
      );
    }
  export default UserOnline;
