var React = require('react');
import {render} from 'react-dom';

class Internal extends React.Component {
  render () {
    return <div>
      <h3>Hello, DOM!</h3>
      <h4>It is alive{new Date().toLocaleTimeString()}.</h4>
      <div id="secondary"></div>
    </div>;
  }
}

export default Internal;
