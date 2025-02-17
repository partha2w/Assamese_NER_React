import Header from "./Partials/Header"
import Navbar from "./Partials/Navbar"
import Upload from "./Upload"
import Tagging from "./Tagging"
import Annot_button from "./Annot_button"
import Annot_area from "./Annot_area"

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Upload />
      <Tagging />
      <Annot_button />
      <Annot_area />
    </>
  )
}

export default App
