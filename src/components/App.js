import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.js'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Weather from './Weather.js';
import BMI from './BMI.js';
import Food from './Food.js';
import News from './News.js';

export default function App(){
    return(
        <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<AboutUs/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/weather' element={<Weather/>}></Route>
            <Route path='/bmi' element={<BMI/>}></Route>
            <Route path='/food' element={<Food/>}></Route>
            <Route path='/news' element={<News/>}></Route>
            <Route path='*' element={<Navigate to="/"/>}></Route>
        </Routes>        
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-12 bg-dark p-3'></div>
            </div>
        </div>
        </BrowserRouter>
        </>
    );
}