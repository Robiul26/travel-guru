
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componets/pages/Home";
import StayPlace from "./componets/pages/StayPlace";


function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/booking/:name" element={<StayPlace />}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;