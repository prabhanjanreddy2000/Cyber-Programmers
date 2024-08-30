import homePageLogo from '../images/logoHomePage.jpg'
import robot from '../images/hello.png'
import carouselImage1 from '../images/carousel-image-1.jpg' 
import carouselImage2 from '../images/carousel-image-2.jpg' 
import carouselImage3 from '../images/carousel-image-3.jpg' 
import cardImage1 from '../images/card-image-1.jpg'
import cardImage2 from '../images/card-image-2.jpg'
import cardImage3 from '../images/card-image-3.jpg'
import '../styles/home.css'
import { Link } from 'react-router-dom'

export default function Home(){
    return(
        <>
        <div className='container-fluid bg-success-subtle'>
        <div className='row'>
            <div className='col-lg-12 my-2'>
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="2000">
                            <img src={carouselImage1} class="d-block mx-auto img-fluid carousel-image" alt="carousel-image-1"/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Check weather around the world.</h5>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src={carouselImage2} class="d-block mx-auto img-fluid carousel-image" alt="carousel-image-2"/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Enjoy the best food in the town.</h5>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src={carouselImage3} class="d-block mx-auto img-fluid carousel-image" alt="carousel-image-3"/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Stay updated on the go.</h5>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="m287-446.67 240 240L480-160 160-480l320-320 47 46.67-240 240h513v66.66H287Z"/></svg>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M673-446.67H160v-66.66h513l-240-240L480-800l320 320-320 320-47-46.67 240-240Z"/></svg>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-5 mt-lg-5">
                <img src={robot} alt='hi' className='my-1'/>
                <h3>I'm Prabhanjan Reddy,</h3>
                <h3>Front-end Developer</h3>
                <p>I design and develop experiences that make people's lives simpler through Web
                    apps. I work with HTML5, CSS3, JavaScript and React.
                </p>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-3"><img src={homePageLogo} className='img-fluid rounded mx-auto d-block mb-2' alt='home-component-logo'/></div>
            <div className="col-lg-2"></div>
        </div>

        <div className='row'>
            <div className='col-lg-12 p-2 bg-dark'></div>
        </div>

        <div className='row'>
            <div className='col-lg-12 text-center mt-3'><marquee behavior="scroll" direction="left" scrollamount="15"><h2 className='services-heading'>Wherever you go - <u>Stay Updated With The World</u></h2></marquee></div>
        </div>

        <div class="text-dark">
            <hr/>
        </div>

        <div className='row py-3'>
            <div className='col-lg-4'>
                <div class="card home-card">
                    <img src={cardImage1} class="card-img-top" alt="carousel-image-weather"/>
                    <div class="card-body home-card-body text-center">
                        <h5 class="card-title">Weather</h5>
                        <p class="card-text">Weather forecasts, nowcasts and history in a fast and elegant way.</p>
                        <Link to="/weather" class="btn btn-danger">Current Weather</Link>
                    </div>
                </div>
            </div>
            <div className='col-lg-4'>
                <div class="card home-card">
                    <img src={cardImage2} class="card-img-top" alt="carousel-image-news"/>
                    <div class="card-body home-card-body text-center">
                        <h5 class="card-title">Food</h5>
                        <p class="card-text">Grab your smartphone, prepare your appetite, and order to tantalize your taste buds. </p>
                        <Link to="/food" class="btn btn-danger">Delicious Meals</Link>
                    </div>
                </div>
            </div>
            <div className='col-lg-4'>
                <div class="card home-card">
                    <img src={cardImage3} class="card-img-top" alt="..."/>
                    <div class="card-body home-card-body text-center">
                        <h5 class="card-title">News</h5>
                        <p class="card-text">Get breaking news alerts from all over the world in field of business, technology, sports and more.</p>
                        <Link to="/news" class="btn btn-danger">Latest News</Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}