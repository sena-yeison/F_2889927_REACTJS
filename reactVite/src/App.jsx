import { useState } from "react"
import ProfileUser from "./components/profile";

function App() {
  
  const [count, setCount] = useState(1);

  setTimeout(() => {
    // setCount(count+1)
  }, 1000);

  const handleAdd = () => {
    setCount(count+1)
  }

  return (
    <>
      <ProfileUser/>
        
      <div className="container">CONTADOR: {count}</div>
      <button onClick={handleAdd}>+</button>
      <button>Reiniciar</button>
      <button>-</button>
    </>
  )
}



export default App
