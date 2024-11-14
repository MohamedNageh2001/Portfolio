import React from 'react'
import "./portfolio.css"
import filmoonImg from "./../../assets/filmoon.jpeg"
import freshcartImg from "./../../assets/freshcart.jpeg"
import gameoverImg from "./../../assets/gameover.jpeg"
import foodsImg from "./../../assets/foods.jpeg"
import downtubeImg from "./../../assets/downtube.jpeg"
import todolistImg from "./../../assets/todolist.jpeg"
import egyptionpartyImg from "./../../assets/egyptionparty.jpeg"
import foodieImage from "./../../assets/foodie.png"
import foodsuiuxImage from "./../../assets/foodsuiux.jpg"
import graduationuiuxImg from "./../../assets/graduationuiux.jpg"
const data = [
    {
        id: 1,
        image: freshcartImg,
        title: "FreshCart E-Commerce Project",
        github: "",
        demo: ""
    },
    {
        id: 2,
        image: filmoonImg,
        title: "Filmoon Movies Project",
        github: "",
        demo: ""
    },
    {
        id: 11,
        image: foodieImage,
        title: "Restaurant (Foodie)",
        github: "",
        demo: ""
    },
    {
        id: 4,
        image: gameoverImg,
        title: "GameOver Games Project",
        github: "",
        demo: ""
    },
    {
        id: 5,
        image: foodsImg,
        title: "Foods & Recipes JQuery Project",
        github: "",
        demo: ""
    },
    {
        id: 6,
        image: todolistImg,
        title: "ToDoList Project",
        github: "",
        demo: ""
    },
    {
        id: 7,
        image: downtubeImg,
        title: "DownTube Video Downloader",
        github: "",
        demo: ""
    },
    {
        id: 8,
        image: egyptionpartyImg,
        title: "Egyptian Party JQuery Project",
        github: "",
        demo: ""
    },
    {
        id: 9,
        image: foodsuiuxImage,
        title: "Foods App UI/UX",
        github: "",
        demo: "https://xd.adobe.com/view/ea69303d-88de-4698-a4fb-70083a9cfade-bf3a/"
    },
    {
        id: 10,
        image: graduationuiuxImg,
        title: "Graduation Project UI/UX & Front-End",
        github: "",
        demo: "https://xd.adobe.com/view/ea69303d-88de-4698-a4fb-70083a9cfade-bf3a/"
    },
]


const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Resent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {data?.map(item => (
                    <article key={item.id} className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img src={item.image} alt="" />
                        </div>
                        <h3>{item.title}</h3>
                        <div className="portfolio__item-cta">
                            <a href={item.github} className="btn" target="_blank" rel="noreferrer">Github</a>
                            <a href={item.demo} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
                        </div>
                    </article>))}
            </div>
        </section>
    )
}

export default Portfolio