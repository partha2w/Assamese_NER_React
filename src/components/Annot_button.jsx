import React, { useState } from 'react';
import axios from 'axios';

function Annot_button({ annotations, text }) {
  const [tagFormat, setTagFormat] = useState('0');
  const [isSaving, setIsSaving] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleSave = async () => {
    if (tagFormat === '0') {
      alert('Please select a tagging scheme');
      return;
    }

    setIsSaving(true);
    try {
      const response = await axios.post('http://localhost:4000/save-custom', {
        annotations,
        text,
        tagFormat
      });

      if (response.data.message) {
        alert('Annotations saved successfully!');
        console.log('Saved annotations:', response.data.annotations);
      }
    } catch (error) {
      console.error('Save error:', error);
      alert('Failed to save annotations');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDownload = async () => {
    if (tagFormat === '0') {
      alert('Please select a tagging scheme');
      return;
    }

    setIsDownloading(true);
    try {
      const response = await axios.get('http://localhost:4000/download', {
        responseType: 'blob'
      });

      // Create download link
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `annotations_${Date.now()}.txt`);
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download error:', error);
      alert('Failed to download annotations');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="sides_margin">
      <button className="button-18">Annotate Text</button>
      <div className="final-btn">
        <form onSubmit={(e) => e.preventDefault()}>
          <select 
            value={tagFormat}
            onChange={(e) => setTagFormat(e.target.value)}
            name="tag_format" 
            id="tag_format"
          >
            <option value="0">Choose a Tagging Scheme</option>
            <option value="IO">IO</option>
            <option value="JSON">JSON Annotation</option>
            <option value="BIO">BIO</option>
            <option value="BILUO">BILUO</option>
            <option value="BIL2">BIL2</option>
          </select>
          <button 
            className="button-7" 
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? 'Saving...' : 'Save Annotations'}
          </button>
        </form>
        <button 
          className="button-7" 
          onClick={handleDownload}
          disabled={isDownloading}
        >
          {isDownloading ? 'Downloading...' : 'Download Annotations'}
        </button>
      </div>
    </div>
  );
}

export default Annot_button;