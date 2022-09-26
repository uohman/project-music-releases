import React from "react";
import data from "./data.json";
import Album from "./components/Album";
import Header from "./components/Header";

console.log(data);

export const App = () => {
  return (
    <>
    <div className="header" >
      <Header />
      
    </div>
    <section className="container">
      <div className="albums">
        {data.albums.items.map(item => {
          return <Album 
          key={item.id} 
          items={item} />;
        })}
      </div>
    </section>
    </>
  );
};

