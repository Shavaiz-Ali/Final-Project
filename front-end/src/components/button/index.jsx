import React from "react";

function Button({ label, onClick }) {
  return (
    <button
      className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-10 rounded"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
