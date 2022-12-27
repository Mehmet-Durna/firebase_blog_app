import './App.css';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./context/AuthContext";
import PostContextProvider from "./context/PostContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {



  return (
      <div>
        <AuthContextProvider>
            <PostContextProvider>
          <AppRouter/>
            </PostContextProvider>
        </AuthContextProvider>

      </div>
  );
}

export default App;
