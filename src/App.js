import AppRouter from "./app-router/AppRouter";
import "./App.css";
import AppContextProvider from "./contexts/AppContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <AppRouter />
        <ToastContainer />
      </AppContextProvider>
    </div>
  );
}

export default App;
