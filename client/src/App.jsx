import  { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./views/Homepage";
import NavBar from './components/Navbar';
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  const [authorize_flag, setAuthorize_flag] = useState(false);
  const [displayName, setDisplayName] = useState("");


  function displayHandler(value) {
    setDisplayName(value);
  }

  return (
    <AuthProvider>
        <Router>
          <NavBar
            displayName={displayName}
            setDisplayName={displayHandler}
            authorize_flag={authorize_flag}
            setAuthorize_flag={setAuthorize_flag}
          />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
    </AuthProvider>
  );
}

export default App;