import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Checkout from './pages/Checkout'
import CheckoutSuccessful from './pages/CheckoutSuccessful'

export default function App() {
  return (
    <div className="App">
      <div className="screen">
        <BrowserRouter>
          <Routes>
            <Route exact path="/checkout/successful" element={<CheckoutSuccessful />} />
            <Route path="*" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}