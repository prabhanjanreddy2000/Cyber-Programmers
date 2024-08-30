import aboutUsLogo from '../images/logoAboutUs.jpg'
import '../styles/AboutUs.css'
export default function AboutUs(){
    return(
        <>
        <div className="container-fluid bg-success-subtle">
            <div className="row">
                <div className="col-lg-12">
                    <img src={aboutUsLogo} alt="About Us Logo" className='d-block mx-auto mt-2'/>
                </div>
            </div>
            <div className='row'>
                <div className="col-lg-12 mt-lg-5 text-center about-us-data">
                    <p>We are a team of front-end developers from Hyderabad.</p>
                    <div className='text-danger'>
                        <hr/>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-4 about-us-data'>
                <h4>What do we do?</h4>
                    <p>We involve in creation of technical elements that influence the look and feel of a website.
                        Good design enhances the user-experience and technical advantages as well. 
                    </p>
                </div>
                <div className='col-lg-8'></div>
            </div>
            <div className='row'>
                <div className='col-lg-4'></div>
                <div className='col-lg-4 about-us-data'>
                <h4>Why do we do?</h4>
                    <p>The brand value of an organisation depends on the front-end utility of its website to a great extent.
                         If it can translate clients’ needs and expectations, it becomes much easier to achieve business goals.
                    </p>
                </div>
                <div className='col-lg-4'></div>
            </div>
            <div className='row'>
                <div className='col-lg-8'></div>
                <div className='col-lg-4 about-us-data'>
                <h4>How does it help?</h4>
                    <p>A well-developed website can increase the customer base. Existing users who had a great experience will recommend the brand to others.
                         It plays a crucial role to establish brand value for a business both online as well as offline.
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}