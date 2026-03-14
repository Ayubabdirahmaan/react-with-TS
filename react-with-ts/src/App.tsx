import { ContactForm } from "./ContactForm";

function App() {

  const handlesubmit = ({ username, email }: { username: string, email: string }) => {
    console.log({ username, email })
  }
 return (
   <>
    <ContactForm onSubmit={handlesubmit} />
  </>
 )
}

export default App;
