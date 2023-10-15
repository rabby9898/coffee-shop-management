import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const updateCoffees = useLoaderData();
  const { _id, name, supplier, category, chef, taste, details, photo } =
    updateCoffees;

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const chef = form.chef.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const UpdateCoffeeInfo = {
      _id,
      name,
      supplier,
      category,
      chef,
      taste,
      details,
      photo,
    };
    // send to server
    fetch(
      `https://server-ifb9ch42p-fajle-rabbys-projects.vercel.app/coffee/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(UpdateCoffeeInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire("Good job!", "Updated Successfully!", "success");
      });

    // console.log(name, supplier, category, chef, taste, details, photo);
  };
  return (
    <div className="px-36 py-20">
      <form onSubmit={handleUpdate} className="w-[600px] mx-auto">
        <div className="flex justify-center gap-8">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xl font-semibold">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full max-w-xs focus:border focus:border-red-950 focus:outline-none"
              name="name"
              defaultValue={name}
            />
            <label className="label">
              <span className="label-text text-xl font-semibold">Supplier</span>
            </label>
            <input
              type="text"
              placeholder="Supplier"
              className="input input-bordered w-full max-w-xs focus:border focus:border-red-950 focus:outline-none"
              name="supplier"
              defaultValue={supplier}
            />

            <label className="label">
              <span className="label-text text-xl font-semibold">Category</span>
            </label>
            <input
              type="text"
              placeholder="Category"
              className="input input-bordered w-full max-w-xs focus:border focus:border-red-950 focus:outline-none"
              name="category"
              defaultValue={category}
            />
          </div>
          {/* -- -------------------------------*/}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xl font-semibold">Chef</span>
            </label>
            <input
              type="text"
              placeholder="Chef"
              className="input input-bordered w-full max-w-xs focus:border focus:border-red-950 focus:outline-none"
              name="chef"
              defaultValue={chef}
            />
            <label className="label">
              <span className="label-text text-xl font-semibold">Taste</span>
            </label>
            <input
              type="text"
              placeholder="Taste"
              className="input input-bordered w-full max-w-xs focus:border focus:border-red-950 focus:outline-none"
              name="taste"
              defaultValue={taste}
            />
            <label className="label">
              <span className="label-text text-xl font-semibold">Details</span>
            </label>
            <input
              type="text"
              placeholder="Details"
              className="input input-bordered w-full max-w-xs focus:border focus:border-red-950 focus:outline-none"
              name="details"
              defaultValue={details}
            />
          </div>
        </div>
        <label className="label">
          <span className="label-text text-xl font-semibold">Photo</span>
        </label>
        <input
          type="text"
          placeholder="Photo URL"
          className="input input-bordered w-full focus:border focus:border-red-950 focus:outline-none"
          name="photo"
          defaultValue={photo}
        />
        <input
          type="submit"
          value="Update Coffee"
          className="bg-white w-full border border-yellow-900 rounded-xl py-3 my-5"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
