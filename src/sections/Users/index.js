import UsersList from './components/UsersList';
import { useEffect, useState } from "react";

function UsersSection() {
  let url = "https://randomuser.me/api/?results=5";

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, [url]);

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
