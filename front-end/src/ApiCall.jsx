

import { useState, useEffect } from "react";

export const ApiCall = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:7000/fetchProducts");
                const result = await response.json();
                setData(result);
                console.log(result);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);


    const remove = (id) => {
        console.log(id);
        const filterItem = data.filter((item) => item._id !== id);
        setData([...filterItem]);
    };
   const edit = (id) => {}

    return (
        <div className="flex flex-wrap justify-center items-center h-screen  gap-5">
            {
                data.map((item) => (
                    <div className="flex justify-start items-start border gap-3 px-3 py-3 w-full" key={item._id}>
                        <div className="flex flex-col">
                            <h3 className="text-[18px] font-[500] text-[#131313]">Image</h3>
                            <img src={item.image} alt="product 1" className="w-[150px] h-[100px]"/>
                        </div>
                        <div className="flex flex-col">
                            <h3  className="text-[18px] font-[500] text-[#131313]">Description</h3>
                            <h3 className="text-[16px] font-[500] text-[#131313]">{item.description}</h3>
                        </div>
                        <div className="flex flex-col">
                            <h3  className="text-[18px] font-[500] text-[#131313]">Ratings</h3>
                            <h3 className="text-[16px] font-[500] text-[#131313]">{item.rating}</h3>
                        </div>
                        <div className="flex flex-col">
                            <h3  className="text-[18px] font-[500] text-[#131313]">Reviews</h3>
                            <h3 className="text-[16px] font-[500] text-[#131313]">{item.reviews}</h3>
                        </div>
                        <div className="flex flex-col gap-3">
                            <button className="h-[50px] w-[100px] text-white bg-red-600 rounded-[4px] flex justify-center items-center" onClick={() => remove(item._id)}>Delete</button>
                            <button className="h-[50px] w-[100px] text-white bg-gray-600 rounded-[4px] flex justify-center items-center" onClick={() => edit(item._id)}>Edit</button>

                        </div>
                    </div>
                ))
            }
        </div>
    );
};
