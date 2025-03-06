import FileUploader from './FileUploader';
import TagManager from './TagManager';
import AnnotationViewer from './AnnotationViewer';
import React, { useState, useEffect } from 'react';
import Annot_button from './Annot_button';

function NER() {
  const [sentences, setSentences] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [annotations, setAnnotations] = useState([]);
  const [selectedWord, setSelectedWord] = useState('');
  const [tags, setTags] = useState([]);
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["#FFD59B", "#81D4FA", "#68C95D", "#D1C4E9", "#FFF59D", "#81D4FA", "#FFC59B", "#FFCCCB", "#EF9A9A", "#C8E6C9", "#CE93D8", "#B2EBF2"];
  return (
    <>
      <FileUploader
        setSentences={setSentences}
        setCurrentIndex={setCurrentIndex}
        setAnnotations={setAnnotations}
      />
      <Annot_button 
        annotations={annotations} 
        text={sentences.join('')}
      />
      <TagManager
        tags={tags}
        setTags={setTags}
        colors={colors}
        colorIndex={colorIndex}
        setColorIndex={setColorIndex}
        selectedWord={selectedWord}
        annotations={annotations}
        setAnnotations={setAnnotations}
        currentSentence={sentences[currentIndex] || ''}
      />
      <AnnotationViewer
        sentences={sentences}
        currentIndex={currentIndex}
        annotations={annotations}
        selectedWord={selectedWord}
        setSelectedWord={setSelectedWord}
        setCurrentIndex={setCurrentIndex}
      />
    </>
  );
}

export default NER;
