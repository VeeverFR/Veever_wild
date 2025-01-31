import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import { SaveCardsProvider } from "./services/saveCardsContext/saveCardsContext";

function App() {
  return (
    <SaveCardsProvider>
      <>
        <NavBar />
        <Outlet />
      </>
    </SaveCardsProvider>
  );
}

export default App;
