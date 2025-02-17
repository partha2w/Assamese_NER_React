function Annot_button(){
    return (
    <div className="sides_margin">

        <button id="annotate-btn" class="button-18">Annotate Text</button>
        <div class="final-btn">
        <form>
            <select name="tag_format" id="tag_format">
                <option value="0">Choose a Tagging Scheme</option>
                <option value="IO">IO</option>
                <option value="JSON">JSON Annotation</option>
                <option value="BIO">BIO</option>
                <option value="BILUO">BILUO</option>
                <option value="BIL2">BIL2</option>
            </select>
            <button id="save-annotations-btn" class="button-7">Save Annotations</button>
        </form>
        <button id="download-btn" class="button-7">Download Annotations</button>
        </div>
    </div>)
}

export default Annot_button;