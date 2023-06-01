import './App.css';
import { CartItemsNumberProvider } from './Context/cartItemsNumberContext';
import Navbar from './Navbar/navbar';
import ProductsSection from './Products/ProductsSection';

function App() {
  return (
    <>
      <CartItemsNumberProvider>
        <Navbar />
        <ProductsSection />
      </CartItemsNumberProvider>
    </>
  );
}


export default App;
