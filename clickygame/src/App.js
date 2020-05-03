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
      <div className="container">
        <div className="grid">
          <div className="row">
              {this.state.images.map(image => (
                <ElfCard
                  className="col-xs-2 col-sm-3"
                  id={image.id}
                  key={image.id}
                  name={image.name}
                  image={image.image}
                />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
