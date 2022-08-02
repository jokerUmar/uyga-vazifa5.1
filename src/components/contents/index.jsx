import "./contents.css"

let Contents = ({btn}) => {
return (

<section className="content">
    <div className="container">
        <h1>Ürününüz veya hizmetiniz için en iyisini birlikte yapalım.</h1>
        <p>360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır. İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım hizmetleri sunmaktayız.</p>
        <button className="content-btn" style={btn}>HEMEN TEKLİF ALIN</button>
    </div>
</section>

)
}

export default Contents