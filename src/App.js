// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Component/AboutMe/AboutMe';
import Blog from './Component/Blog/Blog';
import CheckOut from './Component/CheckOut/CheckOut';

import Login from './Component/Login/Login';
import NotFoundPage from './Component/NotFound/NotFound';
import RequireAuth from './Component/RequireAuth/RequireAuth';

import SignUP from './Component/SignUp/SignUP';

import Footer from './HomePages/Footer/Footer';
import Header from './HomePages/Header/Header';
// import Header from './HomePages/Header/Header';
import HomePage from './HomePages/HomePage/HomePage';
import ServiceDetail from './HomePages/ServiceDetail/ServiceDetail';
// import HomePage from './HomePages/HomePage';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>

       <Route path= '/' element={<HomePage></HomePage>}></Route>
       <Route path= '/home' element={<HomePage></HomePage>}></Route>
       <Route path="/signup" element={<SignUP></SignUP>}></Route>
       <Route path="/servicedetail" element={<ServiceDetail></ServiceDetail>}></Route>
       <Route path="/checkout"element={
         <RequireAuth>
           <CheckOut></CheckOut>
         </RequireAuth>
       }></Route>
       <Route path="/blog" element={<Blog></Blog>}></Route>
       <Route path='/login'element={<Login></Login>}></Route>
      <Route path="/about" element={<AboutMe></AboutMe>}></Route>
       <Route path="*" element={<NotFoundPage></NotFoundPage>}>
       </Route>
       </Routes>
       
       
       <Footer></Footer> 

    </div>
  );
}

export default App;
