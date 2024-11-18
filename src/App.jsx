import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSection from "./components/loginPage/LoginSection";
import CreateProject from "./components/createProject/CreateProject";
import CreateUser from "./components/createUser/CreateUser";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginSection />} />
          <Route path="/login" element={<LoginSection />} />
          <Route path="/create-account" element={<CreateUser />} />
          <Route path="/create-project" element={<CreateProject />} />
        </Routes>
      </Router>
      {/* <CreateUser></CreateUser> */}
      {/* <LoginSection></LoginSection> */}
    </>
  );
}

export default App;
