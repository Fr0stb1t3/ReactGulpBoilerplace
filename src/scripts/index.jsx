var React = require('react');
var Internal = require('./components/internal.jsx');
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <div>
        <h2> Hello React 2!</h2>
        <Internal/>
      </div>
    ;
  }
}

render(<App/>, document.getElementById('app-point'));
