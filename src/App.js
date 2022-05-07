import { Route, Routes } from 'react-router';
import AddItem from './AddItem/AddItem';
import './App.css';
import Header from './componants/Pages/Home/Header/Header';
// import Header from './componants/Pages/Home/Header/Header';
import Home from './componants/Pages/Home/Home/Home';
import Login from './componants/Pages/Login/Login/Login';
import Products from './componants/Pages/Products/Products';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        {/* <Route path='/manageItems' element={<ManageItems></ManageItems>}></Route> */}
        <Route path='/manageItems' element={<AddItem></AddItem>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>

    </div>
  );
}

export default App;
