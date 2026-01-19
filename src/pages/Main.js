import BooksList from '../BooksList';
export default function Main({search, category}) {
  return (
    <div>
      <BooksList search={search} category={category}/>
    </div>
  );
}

