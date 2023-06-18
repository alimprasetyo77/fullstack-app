import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Users from './pages/Users';
import PageNotFound from './components/PageNotFound';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/product-list' element={<Products/>} />
        <Route path='/product/add' element={<AddProduct/>} />
        <Route path='/product/edit/:id' element={<EditProduct/>} />
        
        <Route path='/user-list' element={<Users/>} />
        <Route path='/user/add' element={<AddUser/>} />
        <Route path='/user/edit/:id' element={<EditUser/>} />

        <Route path="/" element={<Login/>} />
        <Route path='/login' element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
