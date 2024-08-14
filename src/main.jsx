import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartProvider } from './contexts/CartContext.jsx'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './Components/Cart.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </StrictMode>,
)
