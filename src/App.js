
import './App.css';
import Profile from './components/Profile';
import Login from './components/Login';
import ChangeColor from './components/ChangeColor';
import ChangeBackground from './components/ChangeBackground';
function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <ChangeColor/>
      <ChangeBackground />
    </div>
  );
}

export default App;
