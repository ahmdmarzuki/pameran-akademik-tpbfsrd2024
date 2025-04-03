import React from "react";
import { useState, useEffect } from "react";
import { getDocs } from "firebase/firestore";
import {
  usersCollectionRef,
  createUser,
  updateUser,
  deleteUser,
} from "../firebase/firestore";

const UsersManagement = () => {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");

  const clearData = () => {
    setNewName("");
    setNewAge("");
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, [users]);
  return (
    <>
      <div className="flex flex-col gap-2 justify-center items-center m-16">
        <input
          type="text"
          placeholder="Name"
          className="px-4 py-2 border rounded-md"
          value={newName}
          onChange={(e) => {
            setNewName(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age"
          className="px-4 py-2 border rounded-md"
          value={newAge}
          onChange={(e) => {
            setNewAge(e.target.value);
          }}
        />
        <button
          onClick={() => createUser(newName, newAge).then(clearData())}
          className="bg-lime-500 px-4 py-2 border rounded-md active:bg-green-700 hover:bg-green-600"
        >
          Create User
        </button>
        <h1>
          {newName}: {newAge}
        </h1>
        {users.map((user) => {
          return (
            <div className="bg-indigo-500 flex flex-row py-4 px-6 w-fit rounded-md gap-7">
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <button
                onClick={() => {
                  updateUser(user.id, user.age);
                }}
              >
                tambah umur
              </button>
              <button
                onClick={() => {
                  deleteUser(user.id);
                }}
              >
                hapus
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UsersManagement;
