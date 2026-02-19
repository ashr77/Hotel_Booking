import React, { use } from "react";
import { roomsDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";

const AllRooms = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
            <div>
                <div className="flex flex-col items-start text-left">
                    <h1 className="font-playfair text-4xl md:text-[40px] font-bold">Hotel Rooms</h1>
                    <p className="text-gray-500/900 text-sm mt-2 max-w-174">Explore our wide range of hotel rooms and find the perfect one for your stay.</p>
                </div>

                {roomsDummyData.map((room) => (
                    <div>
                        <img onClick={() => navigate(`/room/${room._id}`)} src={room.images[0]} alt="hotel-img" title='View Room Details' className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer" />

                        <div>
                            <p>{room.hotel.city}</p>
                            <p className="font-bold text-lg">{room.hotel.name}</p>
                            <div className="flex items-center gap-2">
                                <StarRating />
                                <p className="ml-2">200+ Reviews</p>
                            </div>
                        </div>

                    </div>


                )</div>
            <div>

            </div>

        </div>
    );
};

export default AllRooms;