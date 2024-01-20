import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "../../client/src/components/Header";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer";
import Categories from "./pages/Categories";
import AllProducts from "./pages/AllProducts";
import AllSales from "./pages/AllSales";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/AllProducts" element={<AllProducts />} />
        <Route path="/AllSales" element={<AllSales />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/AllProducts/:id" element={<ProductPage />} />
        <Route path="/Categories/:id" element={<CategoryPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
