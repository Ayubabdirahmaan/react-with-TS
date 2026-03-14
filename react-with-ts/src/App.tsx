import { AgeForm } from "./AgeForm";

function App() {
  const handleSubmit = (age: number) => {
    if (age < 18) {
      console.log("don't submit")
      return
    } else {
      confirm('welcome man')
    }
  }
  return <>
    <AgeForm onSubmit={handleSubmit} />
  </>;
}

export default App;
