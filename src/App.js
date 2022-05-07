import { Route, Routes } from 'react-router';
import './App.css';
import Header from './componants/Header/Header';
import Home from './componants/Home/Home';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
