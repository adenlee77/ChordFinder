import React, { useState } from 'react';
import "./SearchResult.css";

export const SearchResult = ({ result }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    if (selectedImage) {
        return (
            <div className="fullscreen-image-container">
                <h1 className="chord-name">{result.name} Chord</h1>
              <button className="back-button" onClick={() => setSelectedImage(null)}> Back </button>
                <img src={selectedImage} alt="Selected" className="fullscreen-image" />
            </div>
        );
    }

    return (
        <div 
            className="search-result"
            onClick={() => setSelectedImage(result.link)}
        >
            {result.name}
        </div>
    );
};
