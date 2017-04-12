import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


/*We'll set up our App component to render this.props.children,
which will be dynamically populated by either the HomePage or
 the Room component, depending on the selected route.
*/


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
