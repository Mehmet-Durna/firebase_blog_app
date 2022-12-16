import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./context/AuthContext";
import PostContextProvider from "./context/PostContext";



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
