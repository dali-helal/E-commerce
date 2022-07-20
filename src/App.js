import Home from "./pages/Home/Home";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import Allproducts from "./pages/AllProducts/Allproducts";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route index element={<Home />} />
      <Route path="/signin" element={ <Signin/>}/>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/allproducts" element={<Allproducts/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
