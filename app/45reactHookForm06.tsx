"use client";

// import { createRoot } from "https://esm.run/react-dom@18/client";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function Home() {
  const [users, setUsers] = useState([]);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  function addUser(newUser) {
    setUsers(users.concat({ ...newUser, id: users.length + 1 }));
    console.log(newUser);
    reset();
  }

  return (
    <div className="container px-5 sm:px-0 my-10 mx-auto max-w-xl">
      <form
        onSubmit={handleSubmit(addUser)}
        className="bg-white rounded p-5 shadow mt-4"
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            // ref={register({ required: "Name can't be blank" })}
            {...register("name", { required: "Name can't be blank" })}
            className="input"
            name="name"
            id="name"
            type="text"
            placeholder="Bob Wiley"
            autoComplete="off"
          />
          <ErrorMessage error={errors.name} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            // ref={register({ required: "Email can't be blank" })}
            {...register("email", { required: "Email can't be blank" })}
            className="input"
            name="email"
            id="email"
            type="email"
            autoComplete="off"
            placeholder="bob@example.com"
          />
          <ErrorMessage error={errors.email} />
        </div>

        <div className="flex justify-end border-t mt-3 pt-5">
          <button
            type="button"
            onClick={reset}
            className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300"
          >
            Reset
          </button>
          <button className="ml-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Add User
          </button>
        </div>
      </form>

      <div className="bg-white rounded p-5 shadow mt-4">
        <h2 className="text-xl">Users ({users.length})</h2>

        <table className="w-full mt-2">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">ID</th>
              <th className="text-left py-2">Name</th>
              <th className="text-left py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="py-2">{user.id}</td>
                <td className="py-2">{user.name}</td>
                <td className="py-2">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const ErrorMessage = ({ error }) => {
  if (!error) return null;

  return (
    <div className="flex items-center mt-2 text-gray-500 text-sm">
      <span className="ml-1">{error.message}</span>
    </div>
  );
};
