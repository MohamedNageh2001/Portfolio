import React from 'react'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTelegram, BsWhatsapp } from "react-icons/bs"

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/mohamed-nageh-20b641281/" target="_blank" rel="noreferrer" className="">
                <BsLinkedin />
            </a>
            <a href="https://github.com/MohamedNageh2001" target="_blank" rel="noreferrer" className="">
                <BsGithub />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100012235779971" target="_blank" rel="noreferrer" className="">
                <BsFacebook />
            </a>
            <a href="https://www.instagram.com/_mohamed_nageh_5000/" target="_blank" rel="noreferrer">
                <BsInstagram />
            </a>
            <a href="tel:01002146968" target="_blank" rel="noreferrer">
                <BsWhatsapp />
            </a>
            <a href="https://t.me/MO_Nageh2001" target="_blank" rel="noreferrer">
                <BsTelegram />
            </a>
        </div>
    )
}

export default HeaderSocials