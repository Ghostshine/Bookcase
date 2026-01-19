import books from "./books";
import Book from "./Book";

const BooksList = ({ search, category }) => {
  const filteredBooks = books.filter((book) => {
    // tytuł
    const searchText = (search || "").toLowerCase();
    const matchesTitle = book.tittle?.toLowerCase().includes(searchText);

    // kategorie
    const categories = typeof book.category === "string"
      ? book.category.split(",").map(c => c.trim().toLowerCase())
      : [];

    const matchesCategory = category === "all" || categories.includes(category.toLowerCase());

    return matchesTitle && matchesCategory;
  });

  return (
    <div className="bookslist">
      {filteredBooks.length > 0 ? (
        filteredBooks.map((book) => <Book key={book.id} {...book} />)
      ) : (
        <p>Brak wyników</p>
      )}
    </div>
  );
};

export default BooksList;
