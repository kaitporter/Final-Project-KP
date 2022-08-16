import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages & components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import MyProfile from "./pages/MyProfile";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route
          path="/"
          element={<Home/>}
          />
          <Route
          path="/login"
          element={<Login/>}
          />
          <Route
          path="/signup"
          element={<Signup/>}
          />
          <Route
          path="/myprofile"
          element={<MyProfile/>}
          />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

// const App = () => {
//   return (
//     <h1>My react app is live!</h1>
//   )
// }
