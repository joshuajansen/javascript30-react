import React from 'react';

const Slider = ({name, label, onChange}) =>(
  <React.Fragment>
    <label htmlFor={ name }>{ label }</label>
    <input type="range" min="0" max="255" name={ name } onChange={ onChange } />
  </React.Fragment>
)

export default Slider;
