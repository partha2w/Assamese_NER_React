function Upload({setText}){
   
   const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setText(e.target.result); // Send text to NER
        };
        reader.readAsText(file);
      }
    };

   return (
         <form id="upload-form">
            <input onChange={handleFileUpload} type="file" id="textFile" accept=".txt" ></input>
         </form>
    )
 }
 
 export default Upload;