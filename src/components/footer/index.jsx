import React from 'react'
import "./footer.css"

function Footer() {
    return (
        <section className='footer'>
            <div className="container">
                <ul>
                    <li><a href="">Ana Sayfa</a></li>
                    <li><a href="">Kurumsal</a></li>
                    <li><a href="">Neler Yapıyoruz?</a></li>
                    <li><a href="">Projelerimiz</a></li>
                    <li><a href="">Blog</a></li>
                </ul>
                <p>© 2021 Can Çevik. All rights reserved</p>
            </div>
        </section>
    )
}

export default Footer
