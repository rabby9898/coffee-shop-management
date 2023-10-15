import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { json, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loaderUsers = useLoaderData();
  const [users, setUsers] = useState(loaderUsers);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://server-ifb9ch42p-fajle-rabbys-projects.vercel.app/user/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              console.log("Deleted");
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = users.filter((user) => user._id !== _id);
              setUsers(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="text-center py-16 w-[900px] mx-auto">
        <h1 className="text-4xl text-black font-bold">Signed Up Users</h1>
      </div>
      <div className="overflow-x-auto w-[650px] mx-auto ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Date</th>
              <th>Last Logged In</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user) => (
              <>
                <tr key={user._id}>
                  <th>1</th>
                  <td>{user.email}</td>
                  <td>{user.lastLoggedAt}</td>
                  <td>{user.createAt}</td>
                  <td>
                    <button onClick={() => handleDelete(user._id)} className="">
                      <AiFillDelete className="text-2xl text-red-600" />
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
