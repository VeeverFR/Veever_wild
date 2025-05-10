import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import { SaveCardsProvider } from "./services/saveCardsContext/saveCardsContext";

function App() {
  const location = useLocation();

  const hideNavBar =
    location.pathname === "/login" || location.pathname === "/createAccount";

  return (
    <SaveCardsProvider>
      <>
        {!hideNavBar && <NavBar />}
        <Outlet />
      </>
    </SaveCardsProvider>
  );
}

export default App;
