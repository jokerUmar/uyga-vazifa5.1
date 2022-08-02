import "./data.css"
import DataBtn from './data-btn/index'
import DataCard from "./data-card/index"

import card1 from "../../assets/images/card1.png"
import card2 from "../../assets/images/card2.png"
import card3 from "../../assets/images/card3.png"
import card4 from "../../assets/images/card4.png"


let Data = () =>{

    
      let  dataStyle = {
        backgroundColor: "rgba(22, 93, 245, 0.6)",
        color:"white",
        borderRadius : "12px" ,
        padding : "10px 25px",
        border: "0.5px solid rgba(22, 93, 245, 0.1)"
      }

    return (
    
        <section className="data">
            <div className="container">

            <p className="data__title">Neler <span>Yapıyoruz?</span></p>
            <h2>Öğreniyoruz, sizinle paylaşıyoruz.</h2>
            <p className="data__text">Alanında uzman yazar arkadaşlarımızın, bilgi paylaşımı yaptıkları yazıları inceleyelim.</p>

            <div className="data-btn-box">
            <DataBtn dataStyle = {dataStyle} text = "Hepsini Gör" />
            <DataBtn dataStyle = {dataStyle} text = "Web Tasarım" />
            <DataBtn dataStyle = {dataStyle} text = "Kurumsal Kimlik Tasarımı" />
            <DataBtn dataStyle = {dataStyle} text = "SEO" />
            <DataBtn dataStyle = {dataStyle} text = "Dijital Pazarlama" />
            </div>

            <div className="data-box">
                <DataCard dataImg = {card4} title = "Sosyal CRM Nedir? Sosyal CRM Avantajları Nelerdir?" text = "Sosyal CRM, işletmelerin müşteri ilişkileri yönetimi (CRM) stratejilerini sosyal..." />
                <DataCard dataImg = {card1} title = "Dijital PR Nedir? Dijital PR Neden Gereklidir?" text="Dijital PR, sosyal medya platformları ve web siteleri üzerinden işletmelerin..." />
                <DataCard dataImg = {card2} title = "Dijital Ajans Nedir? Doğru Dijital Ajans Nasıl Seçilir?"  text = "Bir dijital ajans arama motorları, e ticaret, web sitesi tasarımı gibi birçok alanda hizmet..." />
                <DataCard dataImg = {card3} title = "Online İtibar Yönetimi Nedir?" text = "Online itibar yönetimi, markanızla dijital dünyada ortaya çıkan algıyı profesyonel şekilde yönetmek..." />
            </div>


            </div>
        </section>
        
    )

}

export default Data