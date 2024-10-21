import React from 'react';
import './Home.css'
import AboutSection from './About';

import SkillSection from './Skills';

import { BsFacebook, BsXLg, BsInstagram, BsLinkedin } from "react-icons/bs";
import photo from '../Assets/salad.jpg';

import bloodss from '../Assets/bloodss.png';
import carsales from '../Assets/carsales.png'
import foodrest from '../Assets/foodrest.png'
import world3 from '../Assets/world3.png'

function Home() {

    const handleSubmit = async () => {
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        try {
            const response = await fetch('http://localhost:3001/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Email sent successfully');
            } else {
                console.error('Failed to send email');
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    return (
        <section>
            <div className="container" id='home'>
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <p>Hi, I'm Salad,</p>
                        <h4>Software Engineer,</h4>
                        <h4>Website and web developer,</h4>
                        <h4>Graphic designer, Project Manager</h4>
                        <p>At 23, living in Kenya, I embody an unwavering spirit of determination,<br />
                            a testament to resilience.</p>
                        <button type="button" class="btn btn-success">Get Started</button>

                        <div className="social-media">
                            <h6>Follow me:</h6>
                            <div className="social-icons">
                                <div className="icon"><BsFacebook /></div>
                                <div className="icon"><BsInstagram /></div>
                                <div className="icon"><BsLinkedin /></div>
                                <div className="icon"><BsXLg /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="image">
                            <img src={photo} alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
            {/* About Section */}
            <AboutSection />

            {/* Skills */}
            <SkillSection/>

            <div className="container" id='Work'>
                <div className="row">
                    <h5>My work</h5>
                    <h2>Projects</h2>
                    <p>Following projects showcases my skills and experience through real-world examples of

                        my work. Each project is briefly described with links to code repositories and live demos

                        in it. It reflects my ability to solve complex problems, work with different technologies,

                        and manage projects effectively.</p>

                    <div className="col-12 col-lg-4">
                        <div className="work-div">
                            <div className="work-img">
                                <img src={bloodss} alt="" className='img-fluid' />
                            </div>
                            <h5>Blood-Donation System</h5>
                            <p>It's a web based application

                                for blood donation that com

                                poses of donor,hospital &

                                company</p>

                            <h6>#React #HTML#CSS#Nodejs</h6>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4">
                        <div className="work-div">
                            <div className="work-img">
                                <img src={carsales} alt="" className='img-fluid' />
                            </div>
                            <h5>Car Sales System</h5>
                            <p>It's a web based application

                                for selling cars where you

                                check dream car and

                                contact/email the seller</p>

                            <h6>#React #HTML#CSS#Nodejs</h6>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4">
                        <div className="work-div">
                            <div className="work-img">
                                <img src={foodrest} alt="" className='img-fluid' />
                            </div>
                            <h5>Restaurant System</h5>
                            <p>It's a web based application

                                for restaurant where you can

                                order your food at the comfort of house</p>

                            <h6>#React #HTML#CSS#Nodejs</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" id='Contact'>
                <div className="row">
                    <div className="col-12 col-lg-6">
                    <form onSubmit={handleSubmit}>
                        <div className="contact-info">
                            <p className='contact-title'>GET IN TOUCH</p>
                            <h3>Contact</h3>
                            
                                <div className="inputs">
                                    <p>Enter your name</p>
                                    <input type="text" name='name'required/>
                                    <p>Enter your email</p>
                                    <input type="email" name='email' required/>
                                    <p>Enter your message</p>
                                    <textarea name="message" id="message" cols="30" rows="3" required></textarea>

                                </div><br />
                            
                            <button type="submit" class="btn btn-success ">Send Message</button>
                        </div>
                        </form>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="world-map">
                            <img src={world3} alt="" className='img-fluid rotating-earth' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
