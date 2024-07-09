import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = (coffees) => {
    console.log(coffees);
    // const co = coffees;
    // console.log(co);
    const { _id, coffee, supplier, taste, category, details, photo } = coffees.coffee;
    const handleDelete = _id => {
        console.log("delete");
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                console.log(_id);
                fetch(`http://localhost:5000/users/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaing = coffe.filter(co => co._id !== _id);
                            setCoffee(remaing);
                        }
                    })


            }
        });
    }
    return (
        <div>
            <div className="card card-side  bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={photo}
                        className="w-52 h-24"
                        alt="Movie" />
                </figure>
                <div className="card-body grid grid-cols-2 items-center">
                    <div>
                        <h2 className="card-title">{supplier}</h2>
                        <p>{taste}</p>
                    </div>
                    <div className="card-actions justify-end grid">
                        <button className="btn btn-primary">Watch</button>
                        <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
                        <Link to={`/updateCoffee/${_id}`}>
                            <button className="btn btn-primary">Edit</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;