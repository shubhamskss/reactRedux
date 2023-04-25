import logo from './logo.svg';
import './App.css';
import HomeContiner from './containers/HomeContiner'
import HeaderContainer from './containers/HeaderContainer';


function App() {
  return (
    <div className="App">
    
    <HeaderContainer/>
      <HomeContiner/>
    </div>
  );
}

export default App;
