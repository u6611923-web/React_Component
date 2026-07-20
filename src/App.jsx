import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Greeting from "./components/Greeting";
import Profile from "./components/Profile";
import Hobby from "./components/Hobby";

function App() {
  return (
    <div className="app">
      <nav>
        <Link to="/">Greeting</Link>
        <Link to="/hobby">Hobby</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Greeting message="👽👽👽👽" />} />
        <Route path="/hobby" element={<Hobby message="I love coding" />} />
        <Route
          path="/profile"
          element={<Profile message="My name is Min Banyar Tala Htaw." />}
        />
      </Routes>
    </div>
  );
}

export default App;
