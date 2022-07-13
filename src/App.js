<<<<<<< HEAD
import Routes from "./routes";
import { Global } from "./styles/GlobalStyle";
import { ToastContainer } from "react-toastify";
import DashPatient from "./pages/DashPatient";
import "react-toastify/dist/ReactToastify.css";
=======

import Routes from './routes';
import { Global } from './styles/GlobalStyle';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'
>>>>>>> 6b0d21081467324bd5423b075492d25e39c4fdb9

function App() {
  return (
    <div>
      <Global />
      <Routes />
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
    </div>
  );
}

export default App;
