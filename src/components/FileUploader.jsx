import React from 'react';
import axios from 'axios';

export default function FileUploader({ setSentences, setCurrentIndex, setAnnotations }) {
  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('textFile', e.target.files[0]);

    try {
      const response = await axios.post('http://localhost:4000/upload', formData);
      const sentences = response.data.text.split(/(?<=[।!?])/).filter(s => s.trim());
      setSentences(sentences);
      setCurrentIndex(0);
      setAnnotations([]);
    } catch (error) {
      console.error('Upload error:', error);
    }
  };

  return (
    <form>
      <input type="file" accept=".txt" onChange={handleUpload} />
      <button type="submit">Upload</button>
    </form>
  );
}