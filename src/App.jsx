import { Suspense, lazy, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

const ProductList = lazy(() => import ('./pages/products/ProductList'))
const ProductDetail = lazy(() => import ('./pages/products/ProductDetail'))
const EditProduct = lazy(() => import ('./pages/products/EditProduct'))
const AddProduct = lazy(() => import ('./pages/products/AddProduct'))

function App() {

  const [ProductToEdit, setProductToEdit] = useState(null)

  return (
    <div className="App">
      <Router>
        <h1>Product shelter</h1>

        <Link to='/add'>
          <button>Add new Product</button>
      </Link>

        <Routes>
          <Route path='/' element={<Suspense fallback={<></>}><ProductList /></Suspense>}/>

          <Route path='/:ProductId' element={<Suspense fallback={<></>}><ProductDetail setProductToEdit={setProductToEdit} /></Suspense>}/>

          <Route path='/:ProductId/edit' element={<Suspense fallback={<></>}><EditProduct ProductToEdit={ProductToEdit} /></Suspense>}/>

          <Route path='/add' element={<Suspense fallback={<></>}><AddProduct /></Suspense>}/>
        </Routes>

      </Router>
    </div>
  )
}

export default App