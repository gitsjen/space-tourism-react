import Navbar from "./Navbar";

function Header() {
  return (
    <div className="header-container">
      <header className="header">
        <p>The Header</p>
        <a className="header-link" href="#"> The Link </a>
        <br></br>
        <a href='#'> Another Link </a>
      </header>
      <Navbar/>
    </div>
  );
}

export default Header;



