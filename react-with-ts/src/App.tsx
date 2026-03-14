import { useState } from "react";
interface User {
  name: string,
  age: number
}
interface userData {
  id: number
  name: string,
  username: string
}
function App() {
  const [count, setCount] = useState<number>(0)
  const [data, setData] = useState<User | null>(null)
  const [task, setTask] = useState<userData[]>([])
  return <>
  <button onClick={() => setCount(count + 1)}>Increment</button>
  <button onClick={() => setCount(count - 1)}>Decrement</button>
   <p>{count}</p>
    <button onClick={() => setData({name: "ayubdheere", age: 22})}>bad me</button>
   <button onClick={() => setData(null)}>click me</button>
   <p>{data?.name}</p>

   <button onClick={() => setTask([{id:1, name: "farah", username: "farah11"}])}>add Taks</button>
   {
    task.map(tasks => (
      <div>
        <p>{tasks.id}</p>
        <p>{tasks.name}</p>
        <p>{tasks.username}</p>
      </div>
    ))
   }
  </>;
}

export default App;
