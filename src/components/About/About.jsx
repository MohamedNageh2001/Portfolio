import React from 'react'
import "./about.css"
import me from "./../../assets/Nageh.jpg"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"
const About = () => {
    return (
        <section id="about">
            <h5>Get to Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={me} alt="Mohamed Nageh" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>Fresh graduated</small>
                        </article>
                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Clients</h5>
                            <small>Not yet</small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Projects</h5>
                            <small>10 Projects</small>
                        </article>
                    </div>
                    <p>
                        I am a dedicated front-end developer and UI/UX designer with a strong foundation in computer science. I graduated with a GPA of 3.07/4 from the Faculty of Computer Science and earned an A+ on my graduation project. My expertise centers around building engaging, efficient, and user-centered web applications using React.

                        Over my career, I have completed 2 UI/UX projects and developed 8+ front-end projects, where I combined a keen eye for design with technical proficiency. My experience has provided me with a solid understanding of both the creative and technical aspects of web development, allowing me to create seamless, responsive, and visually appealing interfaces.

                        {/* I am passionate about designing and coding for usability and aesthetics, and I aim to provide an excellent user experience in every project I undertake. Feel free to explore my portfolio to view my latest projects and learn more about my work!                     */}
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About