import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const AddProducts = ({ coffee, setCoffees, coffees }) => {
  const { _id, name, supplier, category, chef, taste, details, photo } = coffee;
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
          `https://server-ifb9ch42p-fajle-rabbys-projects.vercel.app/coffee/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = coffees.filter((coffee) => coffee._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl flex justify-between gap-4">
        <figure>
          <img src={photo} alt="coffee" />
        </figure>
        <div className="card-body">
          <p>Name: {name}</p>
          <p>Chef: {chef}</p>
          <p>Taste: {taste}</p>
        </div>
        <div className="card-body">
          <button className="bg-yellow-500 px-8 py-3 w-[40%]">View</button>
          <button
            onClick={() => handleDelete(_id)}
            className="bg-red-500 px-8 py-3 w-[40%]"
          >
            Delete
          </button>
          <Link to={`/updateCoffee/${_id}`}>
            <button className="bg-green-500 px-8 py-3 w-[40%]">Edit</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
