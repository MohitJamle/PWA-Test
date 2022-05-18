import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      {navigator.onLine ? null : (
        <h4
          style={{
            background: "#3286ff",
            textAlign: "center",
            color: "white",
            fontWeight: "normal",
          }}
        >
          You are OffLine
        </h4>
      )}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

// 022.64649656638865 => Latitude

// 075.82681480080801 =>Longitude
