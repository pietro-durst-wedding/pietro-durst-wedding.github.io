import * as React from 'react';

export default function PicByText(props) {
  let button = 
  <div className='pic-by-text-container'>
    <div className='pic-by-text-container-img'>
      <p>{props.image}</p>
    </div>
    <div className='pic-by-text-container-text'>
      <h1>{props.title}</h1>
    </div>
  </div>;
  if (props.isLeft) {
    button =
      <div className='pic-by-text-container'>
        <div className='pic-by-text-container-text'>
          <h1>{props.title}</h1>
        </div>
        <div className='pic-by-text-container-img'>
          <p>{props.image}</p>
        </div>
      </div>;
  } 

  return (
      button
  );
}
