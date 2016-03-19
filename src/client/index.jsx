import React from 'react';
import {render} from 'react-dom';
import ComponentA from './ComponentA.jsx';
import ComponentB from '../components/ComponentB.jsx';
class App extends React.Component {
  render () {
    return <div>
      <ComponentB/>
      <p>Hello React!</p>;
      <ComponentA/>
    </div>
  }
}

render(<App/>, document.getElementById('app'));
