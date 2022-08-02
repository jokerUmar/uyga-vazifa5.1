import "./dataBtn.css"

let DataBtn = ({text , dataStyle}) =>{


    return (
        <button className="data-btn1" style={dataStyle}>
            {text}
        </button>
    )
}

export default DataBtn