import React, { useState } from "react";
import "./image.css";
import {post} from '../../utils/post';
let count = 0 ;
// const PhotoUpload: React.FC = () => {
//   const [cards, setCards] = useState<string[]>([""]); 
//   const [totalCards, setTotalCards] = useState<number>(0);
//   const handleUpload =  async (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
//     const files = event.target.files;
//     if (files && files[0]) {
//       // const newPhoto = URL.createObjectURL(files[0]);
//       const formData = new FormData();
//       console.log(files[0]);
//       formData.append('car_image', files[0]); 
//       const response = await post(formData)
//       console.log(response.headers)
//       const newPhoto = URL.createObjectURL(await response.blob());
//       if (totalCards >= 3) {
//         alert("Maximum number of photos reached!");
//         event.target.value = "";
//         return;
//       }
//       console.log(formData);
//       console.log(newPhoto);
//       setCards((prevCards) => {
//         const updatedCards = [...prevCards];
//         updatedCards[index] = newPhoto;
//         count += 1;
//         if ( count >= 3 ) { }
//         if (updatedCards[index + 1] === undefined) {
//           updatedCards.push("");
//         }
//         return updatedCards;
//       });
//       setTotalCards(prevTotal => prevTotal + 1);
//       event.target.value = "";
//     }
//   };
//   const removeCard = (index: number) => {
//     setCards((prevCards) => {
//       const updatedCards = prevCards.filter((_, i) => i !== index);
//       setTotalCards(totalCards - 1);
//       if (updatedCards.length === 0) {
//         updatedCards.push("");
//       }
//       return updatedCards;
//     });
//   };

  const PhotoUpload: React.FC = () => {
    const [photo, setPhoto] = useState<string | null>(null);
  
    const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files && files[0]) {
        // const newPhoto = URL.createObjectURL(files[0]);
        const formData = new FormData();
        console.log(files[0]);
        formData.append('car_image', files[0]); 
        const response = await post(formData)
        console.log(response.headers)
        console.log(JSON.parse(response.headers.get('classes')?? ""))
        localStorage.setItem("x",response.headers.get('classes') ?? "")
        const newPhoto = URL.createObjectURL(await response.blob());
        setPhoto(newPhoto); // Устанавливаем фото
      }
    };
  
    const removePhoto = () => {
      setPhoto(null);
      localStorage.setItem('x','[]')
    };

    return (
      <div className="photo-upload">
        <h1 className="upload-title">Загрузите фотографию своей машины</h1>
        <div className="photo-card">
          {photo ? (
            <div>
              <img src={photo} alt="Uploaded" className="uploaded-photo" />
              <button className="remove-photo-button" onClick={removePhoto}>
                ✖
              </button>
            </div>
          ) : (
            <label className="photo-label">
              Загрузить фото
              <input
                type="file"
                accept="image/*"
                className="photo-input"
                onChange={handleUpload}
              />
            </label>
          )}
        </div>
      </div>
    );
  };
export default PhotoUpload;
