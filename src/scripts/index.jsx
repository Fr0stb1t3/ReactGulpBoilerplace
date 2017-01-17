var React = require('react');
import ReactDOM from 'react-dom';
import Internal from './components/internal.jsx';

class App extends React.Component {
  render () {
    return (<div>
        <h2> Hello React 2!</h2>
        <Internal/>
      </div>) ;
  }
}

ReactDOM.render(<App/>, document.getElementById('app-point'));
