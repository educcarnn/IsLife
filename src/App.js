import './App.css';
import Routes from './routes';
import { Global } from './styles/GlobalStyle';
import { Reset } from './styles/Reset';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Global/>
        <Reset/>
        <Routes/>
      </header>
    </div>
  );
}

export default App;
