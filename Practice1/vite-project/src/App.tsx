import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Pricing";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Applayout from "./pages/Applayout";
import Test from "./components/Test";
import Address from "./components/Address";



function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/applayout" element={<Applayout />}>
          <Route path=":id" element={<Test />} />
          <Route path="address" element={<Address/>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App
