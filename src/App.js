// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Component/Login/Login';
import About from './HomePages/About/About';
import Footer from './HomePages/Footer/Footer';
import Header from './HomePages/Header/Header';
// import Header from './HomePages/Header/Header';
import HomePage from './HomePages/HomePage/HomePage';
// import HomePage from './HomePages/HomePage';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
       <Route path= '/login' element={<Login></Login>}></Route>
       <Route path= '/' element={<HomePage></HomePage>}></Route>
       </Routes>
       <Footer></Footer> 

    </div>
  );
}

export default App;
