var React = require('react');
var Internal = require('./components/internal.jsx');
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <div>
        <p> Hello React!</p>
        <Internal/>
      </div>
    ;
  }
}

render(<App/>, document.getElementById('app-point'));
