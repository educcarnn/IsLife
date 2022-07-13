import Routes from "./routes";
import { Global } from "./styles/GlobalStyle";
import { ToastContainer } from "react-toastify";
import DashPatient from "./pages/DashPatient";
import "react-toastify/dist/ReactToastify.css";

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
