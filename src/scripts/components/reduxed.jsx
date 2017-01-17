var React = require('react');
import {render} from 'react-dom';

class ReduxComponent extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }
  render () {
    return <div>
      <h5>Hello, This is a secondary element!</h5>
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    </div>;
  }
}

export default ReduxComponent;
