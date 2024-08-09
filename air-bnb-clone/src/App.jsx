import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from './components/Card'

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Card />
      </div>
    </>
  );
}

export default App;
