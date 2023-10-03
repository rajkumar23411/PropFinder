import React from "react";

const ButtonType1 = ({ isActive, city, handleCityChange }) => {
    return (
        <button
            onClick={() => handleCityChange(city)}
            className={` ${
                isActive
                    ? "bg-blue-600 text-white"
                    : "bg-slate-200 hover:bg-blue-600 hover:text-white"
            }  px-6 py-3 rounded-3xl font-medium  cursor-pointer`}
        >
            {city}
        </button>
    );
};

export default ButtonType1;
