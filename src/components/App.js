import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Profile from "./Profile"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute";


function App() {

  const history = useNavigate();

  history({ pathname: 'login' });

  return (
 
    
    <Container
      className="d-flex align-items-center justify-content-center" 
      style={{ minHeight: "100vh"}}>
        <div className="w-100" style={{ maxWidth: '400px'}}>
          <Router>
          <AuthProvider>
            <Routes>
              <PrivateRoute exact path="/" element={<Profile/>}/>
              <Route path="/login" element={<Login />}></Route>
            </Routes>
          </AuthProvider>
          </Router>
        {/* <Login /> */}
        </div>
        </Container>
        
        
  )
  
}

export default App;
