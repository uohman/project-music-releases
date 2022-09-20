import React from 'react';

const Album = (props) => {
        console.log(props.data);
  return (
        
        <h2>
          {props.data.name}
        </h2>
        
  );
}

export default Album;
