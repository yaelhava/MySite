import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Profile"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute";


function App() {


  return (
 
    
    <Container
      
      className="d-flex align-items-center justify-content-center" 
      style={{ minHeight: "100vh"}}>
        <div className="w-100" style={{ maxWidth: '400px'}}>
          <Router>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={PrivateRoute}/>
              <Route path="/MySite/" element={<Login />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
            </Routes>
          </AuthProvider>
          </Router>
      
        </div>
        </Container>
        
        
  )
  
}

export default App;
