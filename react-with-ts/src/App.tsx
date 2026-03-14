function App() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log('change event', e.target.value)
  }
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      console.log('click event')
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
  }
  return <>
  <input type="text" onChange={handleChange} />
  <button onClick={handleClick}>Click</button>
  <form onSubmit={handleSubmit}>
    <input type="text" />
    <button type="submit">checked</button>
  </form>
  </>;
}

export default App;
