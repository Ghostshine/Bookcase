
export default function Header({search, setSearch, category, setCategory}) {
  return (
    <div>
        <div className="menu-container container">
        <img src="/logo.gif" alt="logo" className="logo" />
            <div className="menu-items">
                  <input type="text" placeholder="Szukaj książki..." className="search-input" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                  <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                  <option value="all">Wszystkie kategorie</option>
                  <option value="fantasy">Fantasy</option>
                  <option value="science fiction">Science Fiction</option>
                  <option value="horror">Horror</option>
                  <option value="thriller psychologiczny">Thriller psychologiczny</option>
                  </select>
            </div>
        </div>
    </div>
  );
  }

 