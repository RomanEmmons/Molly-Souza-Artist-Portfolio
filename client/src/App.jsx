import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './Hero.jsx';
import Layout from './Layout.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <Layout />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
