import React, { useState } from 'react';
// import axios from 'axios';

export default function TagManager({ tags, setTags, colors, colorIndex, setColorIndex, selectedWord, annotations, setAnnotations, currentSentence }) {
  const [tagName, setTagName] = useState('');

  const handleAddTag = () => {
    if (!tagName) return;
    const newTag = {
      name: tagName.toUpperCase(),
      color: colors[colorIndex]
    };
    setTags([...tags, newTag]);
    setColorIndex((colorIndex + 1) % colors.length);
    setTagName('');
  };

  const handleTagClick = (tag) => {
    if (!selectedWord) return;
    
    const newAnnotation = {
      text: selectedWord,
      label: tag.name,
      color: tag.color,
      start: currentSentence.indexOf(selectedWord),
      end: currentSentence.indexOf(selectedWord) + selectedWord.length
    };

    setAnnotations([...annotations, newAnnotation]);
  };

  return (
    <div className="tag-manager">
      <input 
        type="text" 
        value={tagName}
        onChange={(e) => setTagName(e.target.value)}
        placeholder="Type tag name"
      />
      <button onClick={handleAddTag}>Add Tag</button>
      <div className="tag-buttons">
        {tags.map((tag, index) => (
          <button
            key={index}
            style={{ backgroundColor: tag.color }}
            onClick={() => handleTagClick(tag)}
          >
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
}