import './App.css'
import Friend from './Friend';
import Friends from './Friends';
import './counter'
import Counter from './counter';
import Users from './user';

function App() {
  function handleClick () {
    alert('button clicked');
  }

  const handleClick2=() => {
    alert('2 number Clicked hoisay')
  }
    return (
    <>
      <h2> React Core concepts Part-2</h2>

      <Friends></Friends>
      

      <Counter></Counter>
      <Users></Users>


      <button onClick={handleClick}>Click Me</button>

      <button onClick={handleClick2}>Clicked 2</button>

      <button onClick={() => {alert('Third Button Click')}}>Button Third</button>
       
    </>
  )
}

export default App