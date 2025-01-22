import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Head from "./components/Head";
import SignIn from "./components/SignIn";

function App() {
  return (
    <Router>
      <>
        <Head className="headerfixed" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
