import { useState } from "react";
interface User {
  username: string;
  email: string;
}
interface Todo {
  id: number;
  task: string;
  done: boolean;
}
function App() {
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<User | null>(null);
  const [todo, setTodo] = useState<Todo[]>([]);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <p>{count}</p>

      <button
        onClick={() =>
          setUser({ username: "ayubdheere", email: "ayubdheere@gmail.com" })
        }
      >
        User Data
      </button>
      <button onClick={() => setUser(null)}>bad me</button>
      <p>{user?.username}</p>

      <button
        onClick={() =>
          setTodo([{ ...setTodo, id: 1, task: "create task", done: true }])
        }
      >
        add Tasks
      </button>
      {todo.map((todos) => (
        <div>
          <p>{todos.id}</p>
          <p key={todos.id}>{todos.task}</p>
          <p>{todos.done}</p>
        </div>
      ))}
    </>
  );
}

export default App;
