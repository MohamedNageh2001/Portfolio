import React from 'react'
import "./experience.css"
import { BsFillPatchCheckFill } from "react-icons/bs"
const Experience = () => {
    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Front-End & UI/UX Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>HTML</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>CSS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>JavaScript</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        {/* <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>TypeScript</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article> */}
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>BootStrap</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>TailWind CSS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>React</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        {/* <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>Redux</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article> */}
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>Vite</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        {/* <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>Next</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article> */}
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>Adobe XD</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>Figma</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Basics</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>Basics Programming</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>OOP</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>Data Structure</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>Mathematics(1, 2, 3)</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>Python</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>Computer Vision</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>Databases</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience