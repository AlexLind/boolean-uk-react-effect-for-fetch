import React from "react";
export default function UsersListItem({ user }) {
  return (
    <li
      key={user.dob.date}
      className={user.gender === "male" ? "bg-blue" : "bg-pink"}
    >
      <img src={user.picture.large} alt="" />
      <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
      <p>{`Email: ${user.email}`}</p>
    </li>
  );
}
