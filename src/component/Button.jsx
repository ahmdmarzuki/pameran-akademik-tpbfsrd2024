import React from "react";
import { useState } from "react";

const Button = ({ label }) => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <button
        className="px-4 py-2 m-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
        onClick={increase}
      >
        {label} = {count}
      </button>
      <h1>{count > 5 ? "yes" : "no"}</h1>
    </div>
  );
};

export default Button;
