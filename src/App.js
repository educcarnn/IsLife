
import Routes from './routes';
import { Global } from './styles/GlobalStyle';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Global/>
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
     
        <Routes/>
    </div>
  );
}

export default App;
