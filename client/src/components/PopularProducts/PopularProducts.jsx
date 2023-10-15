import { useLoaderData } from "react-router-dom";
import AddProducts from "../AddProducts/AddProducts";
import { useState } from "react";

const PopularProducts = () => {
  const loadCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadCoffees);
  return (
    <div className="px-36 py-10">
      <h1 className="text-center">Our Popular Products</h1>
      <div className="grid grid-cols-2 gap-8 my-10">
        {coffees.map((coffee) => (
          <AddProducts
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></AddProducts>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
