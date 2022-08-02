import React from 'react'
import "./about.css"
import about from "../../assets/images/about.png"
import star from "../../assets/images/star.png"

function About() {
return (
<section className='about'>
    <div className="container">
        <h2>Memnuniyetini bildiren müşterilerimiz</h2>

        <div className="about-box">
            <img src={about} alt="" />
            <h3>Jane Cooper</h3>
            <i>Jane Cooper</i>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet feugiat donec sit morbi tristique massa
                enim. Consequat odio adipiscing est odio nibh. Nec scelerisque hendrerit in eu purus faucibus quam. Quis
                commodo tortor aliquam tortor</p>

            <div className='star-box'>
                <img src={star} width="24px" alt="" />
                <img src={star} width="24px" alt="" />
                <img src={star} width="24px" alt="" />
                <img src={star} width="24px" alt="" />
                <img src={star} width="24px" alt="" />
            </div>


        </div>

    </div>
</section>
)
}

export default About