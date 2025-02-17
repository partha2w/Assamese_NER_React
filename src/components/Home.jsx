import { Link } from "react-router-dom";
import Header from "./Partials/Header";

function Home() {
  return (
    <>
      <Header />
      <h1>This is Home</h1>
      <p>Choose where you want to go:</p>
      
      <div>
        <Link to="/ner">
          <button>Go to NER</button>
        </Link>
        <Link to="/coreference">
          <button>Go to Co-Reference</button>
        </Link>
      </div>
    </>
  );
}

export default Home;
