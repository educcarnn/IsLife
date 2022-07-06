import './App.css';
import Routes from './routes';
import { Global } from './styles/GlobalStyle';
import { Reset } from './styles/Reset';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ToastContainer
        position="top-right"
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        <Global/>
        <Reset/>
        <Routes/>
      </header>
    </div>
  );
}

export default App;
