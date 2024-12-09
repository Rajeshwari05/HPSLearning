// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
// import "./App.css"; // Global styles

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/about" component={About} />
//           <Route path="/services" component={Services} />
//           <Route path="/contact" component={Contact} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Use Routes instead of Switch
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

