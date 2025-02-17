function Tagging(){
    return (<>
        <div id="tags-input">
            <input type="text" id="tag-name" placeholder="Type tag name"></input>
            <button id="addTag" class="button-9">Add Tag</button>
            <button id="removeTag" class="button-9">Untag</button>
        </div>
        <div id="tags"></div>
    </>)
}
export default Tagging;