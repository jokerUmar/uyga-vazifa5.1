import Book from '..'
import './cards.css'

let BookCards = ({BookTitle , BookText}) =>{
    return (

        <div className="book-card">
            <h1>{BookTitle}</h1>
            <p>{BookText}</p>
        </div>

    )
}

export default BookCards