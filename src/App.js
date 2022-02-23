
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./componets/pages/Home";
import Login from "./componets/pages/auth/Login";
import Register from "./componets/pages/auth/Register";
import StayPlace from "./componets/pages/StayPlace";
import PrivateRoute from "./componets/pages/auth/PrivateRoute";
import { createContext, useState } from "react";
export const UserContext = createContext();

function App() {
  const [logedInUser, setLogedInUser] =useState({});
  return (
    <UserContext.Provider value={[logedInUser, setLogedInUser]}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/destination/:name" element={
              <PrivateRoute>
                <StayPlace />
              </PrivateRoute>          
              }/> 
            
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register />}/>
          </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;