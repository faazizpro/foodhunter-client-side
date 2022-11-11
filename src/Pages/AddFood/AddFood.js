import React from 'react';

const AddFood = () => {


    const handleAddService = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
        const info = form.info.value;
        const price = form.price.value;
        const img = form.img.value;

        const foodData = {
            name,
            category,
            info,
            price,
            img
        }


        fetch('https://y-ashy-seven.vercel.app/foods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(foodData)
        })
          .then(res => res.json())
          .then(data => {
            if(data){
                alert('Food Added Successfully');
                form.reset();
            }
          })

    }

    return (
        <div>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg">
                    <form onSubmit={handleAddService} action="" className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
                        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                            Please Add Your Desire Food
                        </h1>

                        <div>
                            <label htmlFor="name" className="text-sm md:text-xl font-medium">Food Name</label>

                            <div className="relative mt-1">
                                <input
                                    type="text"
                                    id="name"
                                    name='name'
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Food Name"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="category" className="text-sm md:text-xl font-medium">Food Category</label>

                            <div className="relative mt-1">
                                <input
                                    type="text"
                                    id="category"
                                    name='category'
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter category"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="info" className="text-sm md:text-xl font-medium">Food Info</label>

                            <div className="relative mt-1">
                                <input
                                    type="text"
                                    id="info"
                                    name='info'
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter Info"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="price" className="text-sm md:text-xl font-medium">Food price</label>

                            <div className="relative mt-1">
                                <input
                                    type="text"
                                    id="price"
                                    name='price'
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter price"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="img" className="text-sm md:text-xl font-medium">Food Image</label>

                            <div className="relative mt-1">
                                <input
                                    type="text"
                                    id="img"
                                    name='img'
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter Food Image"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white">
                            Submit
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddFood;