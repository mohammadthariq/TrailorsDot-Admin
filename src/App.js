import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Banner } from "./components/PageComponents/Banner";
import { List } from "./components/PageComponents/List";
import { Home } from "./components/PageComponents";
import { Createbanner } from "./components/PageComponents/Banner/create";
import { Createlist } from "./components/PageComponents/List/create";
import { Login } from "./components/PageComponents/Login/login";
import { Signup } from "./components/PageComponents/Signup/signin";

function App() {
  return (
    <div className="App">
      <head> <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        </head>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/banner" element={<Banner />}></Route>
          <Route exact path="/list" element={<List />}></Route>
          <Route exact path="/createbanner" element={<Createbanner />}></Route>
          <Route exact path="/createlist" element={<Createlist />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
