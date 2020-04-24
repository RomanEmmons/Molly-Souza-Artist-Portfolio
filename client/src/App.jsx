import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './Hero.jsx';
import Layout from './Layout.jsx';
import Contact from './Contact.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <Layout />
        <Contact />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
