import { useState } from "react";

function CustomHook() {
  const [count, setCount] = useState(0);

  const inCrement = setCount(count + 1);
  const decrement = setCount(count - 1);

  return { count, inCrement, decrement };
}

export default CustomHook;
