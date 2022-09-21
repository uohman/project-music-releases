import React from "react";

const Album = (props) => {
  console.log("props", props);

  return (
    <div>
      
      <img src={props.albumInfo.images[1].url} alt="Album cover" />
          
      <h2>
      {props.albumInfo.name}
      </h2>
          
    </div>
  );

};

export default Album;