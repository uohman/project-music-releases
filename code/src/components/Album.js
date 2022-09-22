import React from "react";

const Album = (props) => {
 const {images, artists , name} = props.items
  return (
    
    <div className="single-album">

      <div className="img-container">
        <img className="album-cover" src={images[1].url} alt="Album cover" />  
      </div> 

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