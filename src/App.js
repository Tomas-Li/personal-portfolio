import './App.css';
import MainContainer from './Components/MainContainer';
import Sidebar from './Components/Sidebar';

import './Loaders.scss'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainContainer />
    </div>
  );
}

export default App;
