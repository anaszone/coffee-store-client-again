import React from "react";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;

    const coffee = {
      name: form.name.value,
      chef: form.chef.value,
      supplier: form.supplier.value,
      taste: form.taste.value,
      category: form.category.value,
      details: form.details.value,
      photo: form.photo.value,
    };

    console.log(coffee);
  };

  return (
    <div className="min-h-screen bg-[#f4e1d2] py-10 px-4">
      <div className="max-w-5xl mx-auto bg-[#f8ede3] p-10 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-4">
          Add New Coffee
        </h1>
        <p className="text-center text-gray-600 mb-10">
          It is a long established fact that a reader will be distracted
          by the readable content of a page when looking at its layout.
        </p>

        <form onSubmit={handleAddCoffee}>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="font-semibold">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter coffee name"
                className="w-full mt-2 p-3 rounded-md border"
              />
            </div>

            {/* Chef */}
            <div>
              <label className="font-semibold">Chef</label>
              <input
                type="text"
                name="chef"
                placeholder="Enter coffee chef"
                className="w-full mt-2 p-3 rounded-md border"
              />
            </div>

            {/* Supplier */}
            <div>
              <label className="font-semibold">Supplier</label>
              <input
                type="text"
                name="supplier"
                placeholder="Enter coffee supplier"
                className="w-full mt-2 p-3 rounded-md border"
              />
            </div>

            {/* Taste */}
            <div>
              <label className="font-semibold">Taste</label>
              <input
                type="text"
                name="taste"
                placeholder="Enter coffee taste"
                className="w-full mt-2 p-3 rounded-md border"
              />
            </div>

            {/* Category */}
            <div>
              <label className="font-semibold">Category</label>
              <input
                type="text"
                name="category"
                placeholder="Enter coffee category"
                className="w-full mt-2 p-3 rounded-md border"
              />
            </div>

            {/* Details */}
            <div>
              <label className="font-semibold">Details</label>
              <input
                type="text"
                name="details"
                placeholder="Enter coffee details"
                className="w-full mt-2 p-3 rounded-md border"
              />
            </div>

            {/* Photo */}
            <div className="md:col-span-2">
              <label className="font-semibold">Photo</label>
              <input
                type="text"
                name="photo"
                placeholder="Enter photo URL"
                className="w-full mt-2 p-3 rounded-md border"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-8 bg-[#d4a373] text-white py-3 rounded-md text-lg font-semibold hover:bg-[#b5835a] transition"
          >
            Add Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;