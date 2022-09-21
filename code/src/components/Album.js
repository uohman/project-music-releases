import React from "react";
import Artist from "./Artist"

const Album = (props) => {

  return (
    <div>

      <img src={props.albumInfo.images[1].url} alt="Album cover" />
          
      <h2>
      {props.albumInfo.name}
      </h2>

      {props.albumInfo.artists.map(item => {
        return <Artist
        key={item.id}
        artistInfo={item} />
      })}

    </div>
  );

};

export default Album;