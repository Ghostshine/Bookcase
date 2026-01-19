import { Link } from "react-router-dom";

const Book = (props) => {
    const { id, tittle, coverImage, status1, status2, pages, cost, author} = props;
    return (
          <div className="bookcard">
            <Link key={id} to={`/books/${id}`}>
            <div className="book-main">
                <h3>{tittle}</h3>
                <img src={coverImage} alt={tittle} className="coverImg" />
            </div>

            <div className="book-extra">
                <p><strong>Autor:</strong> {author}</p>
                <p>{status1}</p>
                <p>{status2}</p>
                <p>Liczba stron: {pages}</p>
                <p>{cost} PLN</p>
            </div>
            </Link>
        </div>
    )
};

export default Book;