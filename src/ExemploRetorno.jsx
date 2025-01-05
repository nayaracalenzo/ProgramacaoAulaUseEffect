import { useState, useEffect } from "react";


const ExemploEfeito = () => {
    const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('count is:', count)
      document.title = count
      console.log('efeito colateral ocorrendo')

      return () => {
    document.title = 'React App'
  }
  }, [count]);
 return (
  <>
  <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        increment
      </button>

      <button onClick={() => setCount((count) => count - 1)}>
        decrement
      </button>
      <p>count is {count}</p>
      </div>
  
  </>
  )
}

export default ExemploEfeito