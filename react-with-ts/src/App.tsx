import { useState } from "react";

interface User {
  name: string;
  age: number;
}
function App() {
  const [count, setCont] = useState<number>(0);
  const [data, setData] = useState<User | null>(null);
  const [tasks, setTasks] = useState<string[]>([])
  return (
    <>
      <button onClick={() => setCont(count + 1)}>addition</button>
      <p>{count}</p>
      <button onClick={() => setData({ name: "ayubdheere", age: 23 })}>
        bad me
      </button>
      <button onClick={() => setData(null)}>bad me</button>

      <p>{data?.name}</p>

      <button onClick={() => setTasks(["ayubabdirahman", " ", "ahmed", " ", "salah"])}>add TASKS</button>
      <p>{tasks}</p>
    </>
  );
}

export default App;
