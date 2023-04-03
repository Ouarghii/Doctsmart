// import React, { useState } from 'react';
// import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
// import './styles.css';
// import img1 from '../assets/p1.jpg'
// import img2 from '../assets/p2.png'
// import img3 from '../assets/p3.png'
// import img4 from '../assets/p4.png'
// function PictureGallery() {
//   const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

//   const pictures = [
//     {
//       src: img1,
//       alt: 'Picture 1',
//       description: 'Your Health Is Our Priority',
//     },
//     {
//       src: img2,
//       alt: 'Picture 2',
//       description: 'Your Health Is Our Priority',
//     },
//     {
//         src: img3,
//         alt: 'Picture 2',
//         description:'Your Health Is Our Priority',
//       },
//       {
//         src: img4,
//         alt: 'Picture 2',
//         description: 'Your Health Is Our Priority',
//       },
    
//   ];

//   const handlePreviousPicture = () => {
//     setCurrentPictureIndex((currentPictureIndex - 1 + pictures.length) % pictures.length);
//   };

//   const handleNextPicture = () => {
//     setCurrentPictureIndex((currentPictureIndex + 1) % pictures.length);
//   };

//   return (
//     <div className="picture-gallery-container">
//         <button onClick={handlePreviousPicture}>
//           <AiFillCaretLeft style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} />
//         </button>
//       <div className="picture-container">
//         <img style={{width:'100%',height:'1050px'}} src={pictures[currentPictureIndex].src} alt={pictures[currentPictureIndex].alt} />
//         <div className="picture-description">{pictures[currentPictureIndex].description}</div>
//       </div>
     
        
//         <button onClick={handleNextPicture}>
//           <AiFillCaretRight style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}/>
//         </button>
//       </div>
   
//   );
// }

// export default PictureGallery;
import React, { useState } from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import './styles.css';
import img1 from '../assets/p1.jpg'
import img2 from '../assets/p2.png'
import img3 from '../assets/p3.png'
import img4 from '../assets/p4.png'

function PictureGallery() {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  const pictures = [
    {
      src: img1,
      alt: 'Picture 1',
      description: 'Your Health Is Our Priority',
    },
    {
      src: img2,
      alt: 'Picture 2',
      description: 'Quality Care for All',
    },
    {
      src: img3,
      alt: 'Picture 3',
      description: 'Expert Doctors and Nurses',
    },
    {
      src: img4,
      alt: 'Picture 4',
      description: 'State-of-the-Art Facilities',
    },
  ];

  const handlePreviousPicture = () => {
    setCurrentPictureIndex((currentPictureIndex - 1 + pictures.length) % pictures.length);
  };

  const handleNextPicture = () => {
    setCurrentPictureIndex((currentPictureIndex + 1) % pictures.length);
  };

  return (
    <div className="picture-gallery-container">
      <button onClick={handlePreviousPicture} className="arrow-button arrow-left">
        <AiFillCaretLeft />
      </button>
      <div className="picture-container">
        <img style={{ width: '100%', height: '1050px' }} src={pictures[currentPictureIndex].src} alt={pictures[currentPictureIndex].alt} />
        <div className='picture-description-container'>
        <div className="picture-description">{pictures[currentPictureIndex].description}</div>
        </div>
        
      </div>
      <button onClick={handleNextPicture} className="arrow-button arrow-right">
        <AiFillCaretRight />
      </button>
    </div>
  );
}

export default PictureGallery;