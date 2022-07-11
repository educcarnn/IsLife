
import Routes from './routes';
import { Global } from './styles/GlobalStyle';
import { ToastContainer } from 'react-toastify';
<<<<<<< HEAD
import DashPatient from './pages/DashPatient';
=======
import 'react-toastify/dist/ReactToastify.css'
>>>>>>> 40092de1816676b383aedb2a7a8f4e9c4a41267b

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
