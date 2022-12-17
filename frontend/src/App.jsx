import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Logout from "./components/Logout";
import PostContent from "./components/PostContent";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import UserProfile from "./components/UserProfile";
import EditUser from "./components/EditUser";
import Footer from "./components/Footer";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { jaJP } from "@mui/material/locale";

const theme = createTheme({}, jaJP);

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header title="シカクチコミ - IT資格の口コミアプリ -" />
          <main>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/logout" element={<Logout />}></Route>
              <Route path="/posts/new" element={<CreatePost />}></Route>
              <Route path="/posts/:postId" element={<PostContent />}></Route>
              <Route path="/posts/:postId/edit" element={<EditPost />}></Route>
              <Route path="/users/:userId" element={<UserProfile />}></Route>
              <Route path="/users/:userId/edit" element={<EditUser />}></Route>
            </Routes>
          </main>
        </Container>
        <Footer
          title="シカクチコミ! - IT資格の口コミアプリ -"
          description="Something here to give the footer a purpose!"
        />
      </ThemeProvider>
    </Router>
  );
}

export default App;
