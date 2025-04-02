import React, { useRef, useState } from "react";

const Tes = () => {
  const [count, setCount] = useState(1);
  const countRef = useRef(5);

  function Increase() {
    setCount(count + 1);
    countRef.current += 1;
    console.log(countRef.current);
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center text-6xl">
      <button
        onClick={Increase}
        className="bg-green-400 px-2 py-2 rounded-full"
      >
        +
      </button>
      <h1>count = {countRef.current}</h1>
    </div>
  );
};

export default Tes;
