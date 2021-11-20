import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement} from './actions';

function App() {

  const counter=useSelector(state=>state.counter);
  const isLogged=useSelector(state=>state.isLogged);
  const dispatch=useDispatch();
  return (
    <div className="App">
<h1>counter:{counter}</h1>
     {isLogged?<h1>LoggedIn</h1>:""}
     <button onClick={()=>dispatch(increment())}>+</button>
     <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
