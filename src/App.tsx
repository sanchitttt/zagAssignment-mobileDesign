import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.page"
import ProductDetails from "./pages/ProductDetails.page"
import PaymentPage from "./pages/Payment.page"
import PaymentAuthenticationPage from "./pages/PaymentAuthentication.page"
import PaymentSuccessPage from "./pages/PaymentSuccess.page"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<ProductDetails
        name='Roller Rabbit'
        description="Vado Odelle Dress"
        inStock={true}
        rating={5}
        totalReviews={320}
        price={198.00}
      />} />
      <Route path='/payment' element={<PaymentPage />} />
      <Route path='/authentication' element={<PaymentAuthenticationPage />} />
      <Route path='/success' element={<PaymentSuccessPage />} />
    </Routes>
  )
}

export default App
