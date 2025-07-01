import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Page from './frontpage';
import ShoppingList from './shoppingList';
import ProductDetail from './ProductDetail';



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/shop" element={<ShoppingList />} />
        <Route path="/product/1" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
