import { useEffect, useRef, useState } from "react";

interface User {
  name: string;
  email: string;
  phone: string;
}

function App() {
  const [users, setUsers] = useState<User | null>(null);

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(()=> {
      if(inputRef.current) {
        inputRef.current.focus()
      }
  },[])

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch("/api/user");
      const data: User = await response.json();
      setUsers(data);
      console.log(data);
    }
    fetchUser();
  }, []);

  return <>
  <input ref={inputRef} type="text" />
  {<p>{users?.name}</p>}
  </>;
}

export default App;
