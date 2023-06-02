import './App.css';
import { CartProvider } from './Context/CartContext';
import Navbar from './Navbar/navbar';
import ProductsSection from './Products/ProductsSection';

function App() {
  return (
    <>
        <CartProvider>
          <Navbar />
          <ProductsSection />
        </CartProvider>
    </>
  );
}

export default App;


