import "./dataCard.css"

let DataCard = ({dataImg , title , text}) =>{

    console.log(dataImg);

    return (
        <div className="data-card">
            <img src={dataImg} alt=""  width={"215px"}  />
            <p className="data-card__title" style={{color : "#165DF5" , fontSize:"14px"}}>Dijital Pazarlama</p>
            <h3>{title}</h3>
            <p className="data-card__text">{text}</p>
            <a href="" style={{color:"rgba(22, 93, 245, 1)", position:"absolute", bottom:"0px", right:"15px"}}>Devamını Oku</a>
        </div>
    )
}

export default DataCard