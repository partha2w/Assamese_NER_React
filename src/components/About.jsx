function About() {

  return (
    <>
      <div id="header">
        <h1>About This Tool</h1>
      </div>
      <div class="about">
        <p>The Assamese Text Annotation Tool is designed to help users easily annotate text in the Assamese language, supporting both automatic and manual tagging for Natural Language Processing (NLP) tasks. It facilitates Named Entity Recognition (NER) by allowing users to tag important entities like names, locations, and organizations directly within the text. Additionally, users can manage annotations by adding, modifying, or removing tags as needed.
        </p>
        <br></br>
        Key features include:
        <ul>
          <li>NER Tagging: Highlight entities and label them with categories such as "PERSON," "LOCATION," or "LANGUAGE."</li>
          <li> Annotation Download: Save annotated text in a structured format for further analysis or model training.</li>
        </ul>
        By making annotation efficient and accessible, this tool supports the development and improvement of NLP models tailored to the Assamese language.
      </div>
    </>
  )
}

export default About;