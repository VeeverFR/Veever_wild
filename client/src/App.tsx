import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import ItinerarySection from "./components/itinerarySection/itinerarySection.tsx";

function App() {
  return (
    <>
      <h1>pouet</h1>
      <ItinerarySection />
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
