import { ContactForm } from "./ContactForm";

function App() {

  const handlesubmit = ({ username, email }: { username: string, email: string }) => {
  if(username && email) {
    
  }
  }
 return (
   <>
    <ContactForm onSubmit={handlesubmit} />
  </>
 )
}

export default App;
