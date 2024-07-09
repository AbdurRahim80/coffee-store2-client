import Swal from 'sweetalert2'
const AddCoffee = () => {
    const handlesubmit = e => {
        e.preventDefault();
        const form = e.target;
        const coffee = form.name.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { coffee, supplier, taste, category, details, photo }
        console.log(coffee, supplier, taste, category, details, photo);
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newCoffee),
        })
            .then(res => res.json())
            .then(data => {
                
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Add Successful',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                console.log(data);
            })
    }
    return (
        <div className="max-w-screen-lg mx-auto">
            <h1 className="text-xl font-bold">Add a Coffee</h1>
            <form onSubmit={handlesubmit}>
                <div className="flex gap-2">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name="name" placeholder="Coffee name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name="supplier" placeholder="Supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <label className="label">
                    <span className="label-text">Photo</span>
                </label>
                <div className="form-control">
                    <label className="input-group input-group-vertical">
                        <input type="text" name="photo" placeholder="photo" className="input input-bordered w-full" />
                    </label>
                </div>
                <button className="btn w-full mt-3 bg-green-400 hover:bg-green-500 text-red-800 text-xl">Add Coffee</button>
            </form>
        </div>
    );
};

export default AddCoffee;