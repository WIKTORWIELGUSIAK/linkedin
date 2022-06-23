/** @format */

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <div className="app__body">
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default App;
