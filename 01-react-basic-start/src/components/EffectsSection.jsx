import { useEffect, useState, useCallback } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/modal";

export default function EffectsSection() {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setUsers(users);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // useEffect(() => {
  //   async function fetchUsers() {
  //     setLoading(true);
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     const users = await response.json();
  //     setUsers(users);
  //     setLoading(false);
  //   }

  //   fetchUsers();
  // }, []);

  return (
    <section>
      <h3>Effects</h3>

      <Button style={{ marginBottom: "1rem" }} onClick={() => setModal(true)}>
        Open info
      </Button>

      <Modal open={modal}>
        <Button
          onClick={() => setModal(false)}
          style={{ position: "absolute", right: "0px" }}
        >
          X
        </Button>
        <h3>Main info</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia,
          quasi?
        </p>
      </Modal>
      {loading && <p>Loading...</p>}

      {!loading && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
