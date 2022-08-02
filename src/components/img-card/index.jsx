import './imgcard.css'

let ImgCard = ({img , imgTitle , imgText}) =>{


    return(

        
        <div className="img-card">

        <img src={img} alt="" width={"64px"} />
        <h4>{imgTitle}</h4>
        <span>{imgText}</span>
        </div>

    )

}


export default ImgCard