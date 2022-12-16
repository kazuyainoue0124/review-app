import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Logout from "./components/Logout";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import UserProfile from "./components/UserProfile";
import EditUser from "./components/EditUser";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/posts/new" element={<CreatePost />}></Route>
        <Route path="/posts/:postId/edit" element={<EditPost />}></Route>
        <Route path="/users/:userId" element={<UserProfile />}></Route>
        <Route path="/users/:userId/edit" element={<EditUser />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
