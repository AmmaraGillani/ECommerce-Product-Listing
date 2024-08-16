import ProductList from "./components/ProductList"
import ProductListingPage from "./pages/ProductListingPage"

function App() {

  return (
    <div className="bg-slate-300">
      <h1 className="text-3xl font-bold underline text-center">
        Ecommerce Product Listing
      </h1>
      <ProductListingPage />
    </div>
  )
}

export default App
