import type React from "react";
import CustomHook from "./Hook/CounterHook";

function App() {
  const {count, inCrement, decrement} = CustomHook()


  return <>
  <p>{count}</p>
  <button onClick={(e: React.MouseEvent<HTMLElement>) => inCrement}>+</button>
    {/* <button onClick={(e: React.MouseEvent) => decrement}>+</button> */}
  </>;
}

export default App;
