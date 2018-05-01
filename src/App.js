import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';


import Feed from './containers/Feed';


class App extends Component {
  render() {
    return (
       <BrowserRouter>
        <div className="App">
          <Feed />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
