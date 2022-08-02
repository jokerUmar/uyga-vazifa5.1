import "./header.css"
import ImgCard from "../img-card";
import coffee from "../../assets/images/coffee.png"
import box from "../../assets/images/box.png"
import time from "../../assets/images/time.png"


const Header = ({btn , span }) => {




return(

<div className="header">
    <div className="overlay"></div>
    <div className="container">
        <div className="header-fluid">


            <div className="container">

                <div className="logotip">
                    <a href="" className="logo"></a>
                    <p>Digital <span>Agency</span> </p>
                </div>

                <nav>
                    <ul>
                        <li><a href="">Ana Sayfa</a></li>
                        <li><a href="">Kurumsal </a></li>
                        <li><a href="">Neler Yapıyoruz?</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                </nav>

                <div className="log">
                    <p>EN</p>
                    <button style={btn}>Müşteri Girişi</button>
                </div>

            </div>


        </div>

        <div className="hero">
            <div className="hero-data">
                <h1>İşinize uygun <span>tasarım</span> ve <span>yazılımlar</span> </h1>
                <p>360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır. İşletmelerin ihtiyaçlarına uygun
                    web tasarım ve web yazılım hizmetleri sunmaktayız.</p>

                <button style={btn}>Detaylı İncele  </button>
            </div>

            <div className="img-box">
                <i>Assalomu alaykum , </i>

                <h1>Web sitesi ve Kurumsal Kimlik Tasarımları</h1>

                <p>Online dünyadaki yüzünüz olan web sitelerinizi tasarlar. E-ticaret siteleri dahil olmak üzere tüm
                    ihyitaçlarınıza çözümler sunar.</p>
            </div>

            
            <div className="hero-data2">
        <p className="hero-data2__text1">Neler <span style={span} >Yapıyoruz?</span></p>
        <h3>3 adımda çalışma sürecimiz</h3>
        <p className="hero-data2__text2">360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır.
            İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım hizmetleri sunmaktayız.</p>
    </div>
    <div className="hero-img_box">
            <div className="container">
            
            <ImgCard img = {coffee} imgTitle = "Keşif ve Planlama" imgText = "Belirlenen strateji ile tasarımın ve yazılımın oluşturulması sağlanır." />
            <ImgCard img = {time} imgTitle = "Tasarım ve Geliştirme" imgText = "Belirlenen strateji ile tasarımın ve yazılımın oluşturulması sağlanır." />
            <ImgCard img = {box} imgTitle = "Test ve Yayına Alma" imgText = "Belirlenen strateji ile tasarımın ve yazılımın oluşturulması sağlanır." />

            </div>
        </div>

        </div>


    </div>
</div>


)

}

export default Header