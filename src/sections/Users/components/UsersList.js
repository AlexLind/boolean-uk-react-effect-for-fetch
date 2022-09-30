import UsersListItem from './UsersListItem';
import React from "react";
export default function UsersList({ users }) {
  return (
    <ul className="users-list">
      {users.map((user) => {
        return (
        <UsersListItem  user={user} key={user.dob.date}  />
        );
      })}
    </ul>
  );
}
