import './book.css'
import bookImg from "../../assets/images/book.png"
import BookCards from "../book/cards/index"
 
let Book = ({span}) =>{
    return (

        <section className='book'>
            <div className="container-fluid">
                <p className='book__title'>Neler <span style={span}>Yapıyoruz?</span></p>
                <p className='book__title2'>Sizin için neler yapıyoruz?</p>
                <p className='book__text'>360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır. İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım hizmetleri sunmaktayız.</p>

                <div className="book-box">
                        <img src={bookImg} alt="" />

                        <div className='book-box-cards'>

                        <h1 className='book-box-cards__title'>Sizin için neler yapabiliriz beraber bakalım.</h1>
                        <p className='book-box-cards__text'>Tüm platformlarda sunduğumuz, web tasarım hizmetimiz ile ilgili bilgiler edinelim.</p>

                            <BookCards BookTitle = "Web Tasarım" BookText = "Var olan veya yeni kurulan işletmenizin, modern bir kurumsal kimliğe sahip olması için web sitesi." />
                            <BookCards BookTitle = "Dijital Pazarlama" BookText = "Web sitenizin veya işletmenizin, daha popüler hale gelmesi için çeşitli hizmetler sunuyoruz." />
                            <BookCards BookTitle = "Prodüksiyon" BookText = "İşletmenizin tanıtımının daha güzel hale gelmesi için, fotoğraf çekimi ve prodüksiyon yapıyoruz." />

                        </div>

                </div>

            </div>
        </section>

    )
}

export default Book