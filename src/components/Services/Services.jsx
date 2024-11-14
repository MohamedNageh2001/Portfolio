import React from 'react'
import "./services.css"
import { BiCheck } from "react-icons/bi"

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className="container services__container">
                {/* <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article> */}
                {/* End of Ui/Ux */}
                {/* <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article> */}
                {/* End of Web Development */}
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <div className="service__list">
                        <li>
                            <div className="">
                                <BiCheck className="service__list-icon" />
                            </div>
                            <p>Wireframing & Prototyping: Creating initial layouts and interactive prototypes to visualize the user journey and structure of the app.</p>
                        </li>
                        <li>
                            <div className="">
                                <BiCheck className="service__list-icon" />
                            </div>
                            <p>User-Centered Design: Designing with user experience in mind, ensuring intuitive, accessible, and engaging interfaces.</p>
                        </li>
                        <li>
                            <div className="">
                                <BiCheck className="service__list-icon" />
                            </div>
                            <p>High-Fidelity Design: Building visually compelling, high-quality designs that represent your brand and meet industry standards.</p>
                        </li>
                    </div>
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>Front End Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <div className="">
                                <BiCheck className="service__list-icon" />
                            </div>
                            <p>Responsive Web Development: Developing websites that work seamlessly across various screen sizes and devices using responsive design principles.</p>
                        </li>
                        <li>
                            <div className="">
                                <BiCheck className="service__list-icon" />
                            </div>
                            <p>Single Page Applications (SPA): Building fast, dynamic web applications with React, providing a smooth, app-like experience for users.</p>
                        </li>
                        <li>
                            <div className="">
                                <BiCheck className="service__list-icon" />
                            </div>
                            <p>Developing REST APIs (Develop APIs for a variety of purposes, such as powering mobile apps, websites, and other software applications.).</p>
                        </li>
                        <li>
                            <div className="">
                                <BiCheck className="service__list-icon" />
                            </div>
                            <p>Component-Based Architecture: Leveraging reusable, modular components to ensure maintainability and scalability.</p>
                        </li>
                        {/* <li>
                            <div className="">
                                <BiCheck className="service__list-icon" />
                            </div>
                            <p>Code Optimization: Improving code efficiency to enhance load times and overall performance.</p>
                        </li> */}
                        {/* <li>
                            <div className="">
                                <BiCheck className="service__list-icon" />
                            </div>
                            <p>SEO-Friendly Development: Ensuring best practices for SEO, including semantic HTML, metadata, and performance optimizations.</p>
                        </li>
                        <li>
                            <div className="">
                                <BiCheck className="service__list-icon" />
                            </div>
                            <p>Cross-Browser Compatibility: Ensuring your application works and looks great on all major browsers.</p>
                        </li> */}
                    </ul>
                </article>
                {/* End of Front End Development */}
                {/* <article className="service">
                    <div className="service__head">
                        <h3>Content Creation</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article> */}
                {/* End of Content Creation */}
            </div>
        </section>
    )
}

export default Services