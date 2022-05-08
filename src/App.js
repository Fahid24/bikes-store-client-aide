import { Route, Routes } from 'react-router';
import './App.css';
import AddProducts from './componants/Pages/AddProducts/AddProducts';
import Header from './componants/Pages/Home/Header/Header';
import Home from './componants/Pages/Home/Home/Home';
import Login from './componants/Pages/Login/Login/Login';
import Register from './componants/Pages/Login/Register/Register';
import ManageItems from './componants/Pages/ManageItems/ManageItems';
import MyItems from './componants/Pages/MyItems/MyItems';
import Products from './componants/Pages/Products/Products';
import RequiredAuth from './componants/RequiredAuth/RequiredAuth';
import Footer from './Shared/Footer/Footer';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        {/* <Route path='/stockProducts' element={<StockProducts></StockProducts>}></Route>
        <Route path='/products/:id' element={<UpdateProduct></UpdateProduct>}></Route> */}
        <Route path='/manageItems' element={
          <RequiredAuth>
            <ManageItems></ManageItems>
          </RequiredAuth>
        }></Route>
        <Route path='/AddProducts' element={
          <RequiredAuth>
            <AddProducts></AddProducts>
          </RequiredAuth>
        }></Route>
        <Route path='/myItems' element={
          <RequiredAuth>
            <MyItems></MyItems>
          </RequiredAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>

    </div>
  );
}

export default App;
