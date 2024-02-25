import { useState } from "react";
import "../css/Counter.css";

export const Counter = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)} className="count">
      {children} #{count}
    </button>
  );
};
