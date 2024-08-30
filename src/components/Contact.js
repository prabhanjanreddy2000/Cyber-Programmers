import ContactLogo from '../images/logoContact.jpg'
import '../styles/contact.css'
export default function Contact(){
    return(
        <>
        <div className="container-fluid bg-success-subtle">
            <div className="row">
                <div className="col-lg-12">
                    <img src={ContactLogo} alt="About Us Logo" className='d-block mx-auto mt-2'/>
                </div>
            </div>
            <div className='row'>
                <div className="col-lg-12 mt-lg-3 text-center form">
                    <form>
                        <div className='row'>
                            <div className='col-lg-12 text-center'>
                                <h1>Welcome to Cyber Programmers</h1>
                                <p>(For any enquiries, drop your details below.)</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div class="mb-3">
                                    <label for="email" class="form-label"><strong>Email</strong></label>
                                    <input type="email" class="form-control" id="username" placeholder="Enter email id"/>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div class="mb-3">
                                    <label for="number" class="form-label"><strong>Mobile Number</strong></label>
                                    <input type="text" class="form-control" id="number" placeholder="Enter Mobile Number"/>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12'>
                                    <input type="submit" class="btn btn-outline-danger my-3"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className='container-fluid contactUsAt'>

            <div className='row bg-success-subtle'>
                <div className='col-lg-6 text-center'>
                    <h2 className='contact-address'>Meet us at</h2>
                        <p>12 Woodford Street
                        <br/>
                        Leicester
                        <br/>
                        United Kingdom
                        </p>
                </div>
                <div className='col-lg-6 text-center'>
                    <a href='' className='link'>www.cyberprogrammers.com</a>
                </div>
            </div>
        </div>
        </>
    );
}