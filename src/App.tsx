/** @format */

import "./App.css";
import Feed from "./components/feed/Feed";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <div className="app__body">
        <Sidebar></Sidebar>
        <Feed></Feed>
      </div>
    </div>
  );
}

export default App;
