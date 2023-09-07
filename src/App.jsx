import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {
  function handleClicked(){
    alert('button clicked')
  }

  const handleClicked2= () =>{
    alert('button click 2')
  }

  const addToFour =(num) =>{
    alert(num + 5)
  }
  

  return (
    <>
      
      <h1>React Core Concepts</h1>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClicked}>Click Me</button>
      <button onClick={handleClicked2}>Click Two</button>
      <button onClick={() => { alert('clicked 3')}}>Third</button>
      <button onClick={() => addToFour(10)}>Four</button>
      
      
    </>
  )
}

export default App
