import { useParams } from "react-router-dom";
import  books  from "../books";

export default function OneBook() {
  const { id } = useParams();

  const book = books.find(
    b => b.id === Number(id)
  );

  if (!book) {
    return <p>Nie znaleziono książki</p>;
  }

  return (
    <div className="container">
        <div className="row">
            <div className="col text-center">
                <img src={book.coverImage} alt={book.tittle}/>
                <p>
                    {book.status1}
                    {book.status2 && ` | ${book.status2}`}
                </p>
                <p><a href="/" class="btn btn-outline-light">Powrót</a></p>
            </div>
            <div className="col col-lg-7">
                <h3>
                    <strong><em>{book.tittle}</em></strong>
                    <samll className="text-body-secondary"> {book.author}</samll>
                </h3>
            <div className="col">
                <div class="row row-cols-2">
                    <h5 class="col">Katergoria: <small className="text-body-secondary">{book.category}</small></h5>
                    <h5 class="col">Koszt: <small className="text-body-secondary">{book.cost} PLN</small></h5>
                    <h5 class="col">Ilość stron: <small className="text-body-secondary">{book.pages}</small></h5>
                    <h5 class="col">Typ (zwykła/manga): <small className="text-body-secondary">{book.type}</small></h5>
                </div>
            </div>
            <div className="col p-3 bookDesc">
                {book.description}
            </div>
            </div>
        </div>
    </div>
  );
}
