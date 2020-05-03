import React from 'react';
import ElfCard from "./components/ElfCard";
import images from "./images.json";

// function App() {
//   return (
//       <h1>Clicky Game</h1>
      
//   );
// }

class App extends React.Component {
  state= {
    images
  };

  render() {
    return (
      <div>
      {this.state.images.map(image => (
        <ElfCard
          id={image.id}
          key={image.id}
          name={image.name}
          image={image.image}
        />
      ))}
      </div>
    );
  }
}

export default App;
