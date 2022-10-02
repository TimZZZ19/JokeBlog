import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/nav-bar/NavBar";
import Home from "./components/content/home/Home";
import Create from "./components/content/create/Create";

import styles from "./App.module.css";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div className={styles.content}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
