import React from "react";

const ButtonType2 = ({ children, handleClick }) => {
    return (
        <button
            onClick={handleClick}
            className="w-max px-4 py-2 border border-blue-600 text-blue-600 rounded-3xl flex items-center justify-center gap-2 font-medium hover:bg-blue-600 hover:text-white cursor-pointer"
        >
            {children}
        </button>
    );
};

export default ButtonType2;
