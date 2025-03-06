import React from 'react';

export default function AnnotationViewer({ sentences, currentIndex, annotations, setCurrentIndex, selectedWord, setSelectedWord }) {
  const handleSelection = () => {
    const selection = window.getSelection().toString().trim();
    if (selection) setSelectedWord(selection);
  };

  const currentSentence = sentences[currentIndex] || '';
  let displaySentence = currentSentence;
  
  annotations.forEach(({ text, label, color }) => {
    if (currentSentence.includes(text)) {
      displaySentence = displaySentence.replaceAll(
        text, 
        `<span style="background-color: ${color};">${text} (${label})</span>`
      );
    }
  });

  return (
    <div className="annotation-viewer">
      <div 
        dangerouslySetInnerHTML={{ __html: displaySentence || 'Upload a file to start...' }}
        onMouseUp={handleSelection}
        contentEditable
      />
      <div className="navigation">
        <button onClick={() => setCurrentIndex(i => Math.max(0, i - 1))}>
          &lt; Previous
        </button>
        <span>Sentence {currentIndex + 1} of {sentences.length}</span>
        <button onClick={() => setCurrentIndex(i => Math.min(sentences.length - 1, i + 1))}>
          Next &gt;
        </button>
      </div>
    </div>
  );
}