import { useState, useEffect } from "react";

function Annot_area({ text }) {

    const [sentences, setSentences] = useState([]);  // Array to hold split sentences
    const [index, setIndex] = useState(0);  // Track current sentence

    useEffect(() => {
        // Split the text into sentences when text changes
        if (text) {
            const splitSentences = text.split(/[\।\?]+/).filter(s => s.trim());
            setSentences(splitSentences);
        }
    }, [text]);

    const handlePrev = () => {
        if (index > 0) setIndex(index - 1);
    };
    const handleNext = () => {
        if (index < sentences.length - 1) setIndex(index + 1);
    };
    // ---------------------------Return -------------------------------------
    return (<div className="sides_margin">
        <div id="annotationsContainer"></div>
        <div id="editable-div" contentEditable="true">
            {sentences.length > 0 ? <p>{sentences[index]}</p> : <p>No text uploaded</p>}
        </div>
        <div id="totalSentences">Sentence {index + 1} of {sentences.length}</div>

        <div className="navigator">
            <button onClick={handlePrev} disabled={index === 0}>&lt; Previous</button>
            <button onClick={handleNext} disabled={index === sentences.length - 1}>Next &gt;</button>
        </div>
    </div>)
}

export default Annot_area;