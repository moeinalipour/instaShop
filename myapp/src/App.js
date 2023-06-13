import './App.css';
import { CartProvider } from './Context/CartContext';
import Navbar from './Navbar/navbar';
import ProductsSection from './Products/ProductsSection';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ManagerPage from './pages/manager';

function App() {
  return (
    <>
      <Router>
        <CartProvider>
          <Navbar />
          <Routes>
          <Route path="/" element={<ProductsSection />} />
          <Route path="/manager" element={<ManagerPage />} />
          </Routes>
        </CartProvider>
      </Router>
    </>
  );
}

export default App;
