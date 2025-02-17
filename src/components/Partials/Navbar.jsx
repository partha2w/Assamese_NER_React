import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div id="navBar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/ner">NER</Link></li>
        <li><Link to="/coreference">Co-Reference</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;