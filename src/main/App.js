import React from "react";
import 'bootswatch/dist/pulse/bootstrap.css';
import Rotas from './rotas'

import '../custom.css';

class App extends React.Component() {
  render() {
    return (
      <div>
        <Rotas></Rotas>
      </div>
    );
  }
}

export default App;
