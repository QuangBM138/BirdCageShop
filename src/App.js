import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import CopyWriter from "./components/footer/CopyWriter";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom"
import CartPage from "./pages/CartPage";
import ProductDetailPage from "./pages/ProductDetailPage"
function App() {
  return (
    <div className="App" style={{ background: "#fff" }}>
      <Header></Header>
      <Routes>
        <Route path="/detail" element={<ProductDetailPage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
