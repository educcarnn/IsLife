
import Routes from './routes';
import { Global } from './styles/GlobalStyle';
import { ToastContainer } from 'react-toastify';
import DashPatient from './pages/DashPatient';

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

        <DashPatient/>
     
      {/* <Routes/> */}
    </div>
  );
}

export default App;
