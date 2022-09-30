import UsersList from './components/UsersList';
import { useEffect, useState } from "react";

function UsersSection() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList   users={users}  />
      </div>
    </section>
  );
}

export default UsersSection;
