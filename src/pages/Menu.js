
export default function LeftMenu({ setTheme, currentTheme }) {
  return (
    <div className="colorbtns">
      Zmień kolor:
      <ul className="color-items">
        <li>
          <button
            className="btn btn-outline-secondary"
            disabled={currentTheme === "dark"}
            onClick={() => setTheme("dark")}
          >
            Dark
          </button>
        </li>
        <li>
          <button
            className="btn btn-outline-danger"
            disabled={currentTheme === "pink"}
            onClick={() => setTheme("pink")}
          >
            Pink
          </button>
        </li>
        <li>
          <button
            className="btn btn-outline-primary"
            disabled={currentTheme === "blue"}
            onClick={() => setTheme("blue")}
          >
            Blue
          </button>
        </li>
      </ul>
    </div>
  );
}
