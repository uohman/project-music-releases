import React from 'react';
import data from './data.json';
import Album from './components/Album';

console.log(data);

export const App = () => {
  return (
    <>
    
    {}
      {data.album.item.map (item => {
        return <Album key={item.id} data = {item} text = "testing props"/>
      
      })}

    </>
  );
}
