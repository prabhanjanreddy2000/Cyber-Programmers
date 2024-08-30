import logo from '../images/logo.jpg'
import '../styles/navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar(){
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
            <Link class="navbar-brand text-light" to="/">
                <img src={logo} alt="Logo" width="50" height="50" class="d-inline-block align-text-center"/> <span className='logoName'>Cyber-Pros</span>
            </Link>
            <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link class="nav-link active text-light mx-3" aria-current="page" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-light mx-3" aria-current="page" to="/about">About Us</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-light mx-3" aria-current="page" to="/contact">Contact</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-light mx-3" aria-current="page" to="/bmi">Check BMI</Link>
                    </li>
                    <li class="nav-item dropdown">
                        <Link class="nav-link dropdown-toggle text-light  mx-3" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Our APIs
                        </Link>
                        <ul class="dropdown-menu bg-secondary-subtle">
                            <li><Link class="dropdown-item" to="/weather">Weather API</Link></li>
                            <li><Link class="dropdown-item" to="/food">Food API</Link></li>
                            <li><Link class="dropdown-item" to="/news">News API</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
        </>
    );
}