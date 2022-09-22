import React from "react";

const Album = (props) => {
 const {images, artists , name} = props.items
  return (
    <div>
      
      <img src={images[1].url} alt="Album cover" />
          
      <h2>
      {name && name}
      </h2>

      {artists.map((artist) => {

        return(
          <h3>
          {artist.name}
          </h3>
        )
      })}      
    </div>
  );

};

export default Album;