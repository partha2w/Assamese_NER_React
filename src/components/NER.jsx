import { useState } from "react";
import Upload  from "./Upload";
import Tagging from "./Tagging"
import Annot_area from "./Annot_area";
import Annot_button from "./Annot_button";

function NER() {

    const [text, setText] = useState(""); // Holds uploaded text

    return (
      <>
       <Upload setText={setText}/>
       <Tagging />
       <Annot_button />
       <Annot_area text={text}/>
      </>
    )
  }
  
  export default NER;