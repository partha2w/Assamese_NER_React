function Annot_area(){
    return (<>
        <div id="annotationsContainer"></div>
        <div id="editable-div" contenteditable="true">Upload a file to start...</div>
        <div id="totalSentences"></div>
        <div class="navigator">
            <button id="prevButton">&lt; Previous</button>
            <button id="nextButton">Next &gt;</button>
        </div>
    </>)
}

export default Annot_area;