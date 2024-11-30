import React, { useState } from "react";
import "./image.css";

const PhotoUpload: React.FC = () => {
  const [cards, setCards] = useState<string[]>([""]); 

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const files = event.target.files;
    if (files && files[0]) {
      const newPhoto = URL.createObjectURL(files[0]);
      const formData = new FormData();
      formData.append('image', files[0]);
      console.log(formData);
      console.log(newPhoto);
      setCards((prevCards) => {
        const updatedCards = [...prevCards];
        updatedCards[index] = newPhoto;

        if (updatedCards[index + 1] === undefined) {
          updatedCards.push("");
        }
        return updatedCards;
      });
      event.target.value = "";
    }
  };

  const removeCard = (index: number) => {
    setCards((prevCards) => {
      const updatedCards = prevCards.filter((_, i) => i !== index);

      if (updatedCards.length === 0) {
        updatedCards.push("");
      }
      return updatedCards;
    });
  };

  return (
    <div className="photo-upload">
      <h1 className="upload-title">Загрузите фотографии своей машины</h1>
      <div className="card-container">
        {cards.map((card, index) => (
          <div key={index} className="photo-card">
            {card ? (
              <img src={card} alt={`Uploaded ${index}`} className="uploaded-photo" />
            ) : (
              <label className="photo-label">
                Загрузите фото
                <input
                  type="file"
                  accept="image/*"
                  className="photo-input"
                  onChange={(e) => handleUpload(e, index)}
                />
              </label>
            )}
            <button className="remove-photo-button" onClick={() => removeCard(index)}>
              ✖
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoUpload;
