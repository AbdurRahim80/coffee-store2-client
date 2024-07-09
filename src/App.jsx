import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";

function App() {
  const coffees = useLoaderData();
  const [coffe, setCoffee] = useState(coffees);
  console.log(coffees);
  return (
    <>
      <h1 className="text-red-500">hot hot coffees: {coffees.length}</h1>
      <div className="grid grid-cols-2 gap-6">
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id}
          coffee = {coffee}
          setCoffee ={setCoffee}
            coffe={coffee}></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App;
