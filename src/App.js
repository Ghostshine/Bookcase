import './App.css';
import Header from './pages/Header';
import LeftMenu from './pages/Menu';
import Main from './pages/Main';
import OneBook from './pages/OneBook';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App({children}) {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState('all');
  const [theme, setTheme] = useState(() => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("theme") || "blue";
  }});

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <header id="headerId" className={`header ${theme}`}>
        <menu>
        <Header search={search} setSearch={setSearch} category={category} setCategory={setCategory}/>
        </menu>
      </header>

      <main id="bg" className={`app-bg ${theme}`}>
        {children}
        <section className="left">
          <LeftMenu setTheme={setTheme} currentTheme={theme}/>
        </section>

        <section className="right">
           <Routes>
            <Route
              path="/"
              element={<Main search={search} category={category} />}
            />
            <Route
              path="/books/:id"
              element={<OneBook/>}
            />
          </Routes>
        </section>
      </main>

      <footer id="footerId" className={`footer ${theme}`}>
        Daria Borowska || <a href="https://github.com/Ghostshine">github/Ghostshine</a> || 2k25
      </footer>
    </BrowserRouter>
  );
}

export default App;
