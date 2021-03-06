import React from 'react';
import './faceRecognition.css';

const FaceRecognition =({imageUrl,box})=>{
    return (
        <div className='center ma'>
          <div className='absolute mt2'> 
          <img id='inputImage' alt='' src={imageUrl} width='500px' height='auto'/>
          <div className='bounding-box'></div>
          </div>
        </div>
    )
}

export default FaceRecognition;