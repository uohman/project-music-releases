import React from 'react';
import data from './data.json';
import Album from './components/Album'

console.log(data);

export const App = () => {
  return (
      <>
      {/* <Header text = "testing the props"/> */}
       {data.albums.items.map (item => {
          return <Album key={item.id} data = {item} text = "testing the props"/>
       })} 
      </>
  );
}


// default export 
// export default App