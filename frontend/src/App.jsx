import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom";

import Page from './frontpage';
import ShoppingList from './shoppingList';
import ProductDetail from './ProductDetail';
import ScrollToTop from './ScrollToTop.jsx'; 



function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
      {/* <ScrollToTop/> */}
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/shop" element={<ShoppingList />} />
        <Route path="/product/1" element={<ProductDetail />} />
      </Routes>
    </HashRouter>
  );
}

export default App
