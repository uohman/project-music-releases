import React from "react";
import data from "./data.json";
import Album from "./components/Album";
import Header from "./components/Header";

console.log(data);

export const App = () => {
  return (
    <>
    <div>
      <Header />
    </div>
    <div>
      
      {data.albums.items.map(item => {
        return <Album 
        key={item.id} 
        items={item} />;
      })}
      
    </div>
    </>
  );
};