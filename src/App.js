import { Route, Routes } from 'react-router';
import AddItem from './AddItem/AddItem';
import './App.css';
import Header from './componants/Pages/Home/Header/Header';
import Home from './componants/Pages/Home/Home/Home';
import Login from './componants/Pages/Login/Login/Login';
import Register from './componants/Pages/Login/Register/Register';
import ManageItems from './componants/Pages/ManageItems/ManageItems';
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
        <Route path='/addItems' element={
          <RequiredAuth>
            <AddItem></AddItem>
          </RequiredAuth>
        }></Route>
        {/* <Route path='/myProducts' element={
          <RequiredAuth>
            <MyProducts></MyProducts>
          </RequiredAuth>
        }></Route> */}
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
