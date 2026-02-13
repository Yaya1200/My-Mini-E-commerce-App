import './App.css'
import CartPage from './components/CartPage'
import ProductListingPage from './components/ProductListingPage'
import Header from './components/header'
import Footer from './components/footer'
import { Routes, Route } from 'react-router-dom'
import ProductDetailPage from "./components/ProductDetailPage";

function App() {
  return (
    <>
      <Header />
<Routes>
  <Route path="/" element={<ProductListingPage />} />
  <Route path="/products/:productId" element={<ProductDetailPage />} />
  <Route path="/cart" element={<CartPage />} />
</Routes>

      <Footer />
    </>
  )
}

export default App

