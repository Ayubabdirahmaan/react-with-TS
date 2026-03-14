import { FormUser } from "./FormUser";

function App() {
  const handleChange = (data: string) => {
      console.log(data.toUpperCase())
  }
  return <>
  <FormUser onSubmit={handleChange} />
  </>;
}

export default App;
