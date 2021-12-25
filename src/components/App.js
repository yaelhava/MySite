import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Profile"
import Login from "./Login"


function App() {
  return (
 
    
    <Container
      className="d-flex align-items-center justify-content-center" 
      style={{ minHeight: "100vh"}}>
        <div className="w-100" style={{ maxWidth: '400px'}}>
          <Router>
          <AuthProvider>
            <Routes>
              <Route path="/login" element={<Login />}></Route>
              <Route exact path="/" element={<Profile/>}></Route>
            </Routes>
          </AuthProvider>
          </Router>
        {/* <Login /> */}
        </div>
        </Container>
        
        

  //       <div className="w-100" style={{ maxWidth: '400px'}}>
  //         {/* login? */}
  //         {/* <Router>
  //           <AuthProvider> */}
  //             {/* determines which route we're cuurently on */}
  //             {/* <Routes>
  //               <Route path="/login" component={Login}></Route>
  //             </Routes>
  //           </AuthProvider>
  //         </Router> */}
  //       </div>
   
  //   
  )
  
}

export default App;
