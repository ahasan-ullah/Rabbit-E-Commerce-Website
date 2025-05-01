import {BrowserRouter, Route, Routes} from 'react-router-dom';
import UserLayout from './components/Layout/UserLayout';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      {/* User Route */}
      <Route path='/' element={<UserLayout/>}></Route>
      {/* Admin Route */}
      <Route></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App