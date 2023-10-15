const AddCoffee = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const chef = form.chef.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const coffeeInfo = {
      name,
      supplier,
      category,
      chef,
      taste,
      details,
      photo,
    };
    // send to server
    fetch("https://server-ifb9ch42p-fajle-rabbys-projects.vercel.app/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffeeInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    // console.log(name, supplier, category, chef, taste, details, photo);
  };
  return (
    <div className="px-36 py-20">
      <div className="text-center py-10 w-[700px] mx-auto">
        <h1 className="text-4xl text-black font-bold">Add New Coffee</h1>
        <p className="text-center text-base text-gray-400 mt-8">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="w-[600px] mx-auto">
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
            />
            <label className="label">
              <span className="label-text text-xl font-semibold">Supplier</span>
            </label>
            <input
              type="text"
              placeholder="Supplier"
              className="input input-bordered w-full max-w-xs focus:border focus:border-red-950 focus:outline-none"
              name="supplier"
            />

            <label className="label">
              <span className="label-text text-xl font-semibold">Category</span>
            </label>
            <input
              type="text"
              placeholder="Category"
              className="input input-bordered w-full max-w-xs focus:border focus:border-red-950 focus:outline-none"
              name="category"
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
            />
            <label className="label">
              <span className="label-text text-xl font-semibold">Taste</span>
            </label>
            <input
              type="text"
              placeholder="Taste"
              className="input input-bordered w-full max-w-xs focus:border focus:border-red-950 focus:outline-none"
              name="taste"
            />
            <label className="label">
              <span className="label-text text-xl font-semibold">Details</span>
            </label>
            <input
              type="text"
              placeholder="Details"
              className="input input-bordered w-full max-w-xs focus:border focus:border-red-950 focus:outline-none"
              name="details"
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
        />
        <input
          type="submit"
          value="Add Coffee"
          className="bg-white w-full border border-yellow-900 rounded-xl py-3 my-5"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
