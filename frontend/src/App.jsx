import {BrowserRouter, Route, Routes} from 'react-router-dom';
import UserLayout from './components/Layout/UserLayout';
import Home from './pages/Home';
import { Toaster } from 'sonner';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import CollectonPage from './pages/CollectonPage';
import ProductDetails from './components/Products/ProductDetails';
import Checkout from './components/Cart/Checkout';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
const App = () => {
  return (
    <BrowserRouter>
    <Toaster position='top-right'/>
    <Routes>
      {/* User Route */}
      <Route path='/' element={<UserLayout/>}>
        <Route index element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='collection/:collection' element={<CollectonPage></CollectonPage>}></Route>
        <Route path='product/:id' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/checkout'element={<Checkout></Checkout>}></Route>
        <Route path='/order-confirmation' element={<OrderConfirmationPage></OrderConfirmationPage>}></Route>
      </Route>
      {/* Admin Route */}
      <Route></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App