import { useState } from "react";

// import "./App.css";
import { db } from "./firebase";
import { uid } from "uid";
import Crud from "./pages/Crud";
import Tes from "./components/tes";
import Hompepage from "./pages/Hompage";

function App() {
  return (
    <>
      <Hompepage />
    </>
  );
}

export default App;
