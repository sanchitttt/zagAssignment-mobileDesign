import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.page"
import ProductDetails from "./pages/ProductDetails.page"

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
        price={"198.00"}
      />} />
    </Routes>
  )
}

export default App
