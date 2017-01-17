var React = require('react');
import {render} from 'react-dom';
var Secondary = require('./secondary.jsx');


class Internal extends React.Component {
  constructor(props){
    super(props);
    var timeVar = new Date().toLocaleTimeString();
    this.state = {
      time: timeVar
    };
  }

  tick(){
    var timeVar = new Date().toLocaleTimeString();
    //console.log("Tick");
    this.setState({
      time: timeVar
    });
    //console.log("Tock");
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }
  componentDidMount(){
    this.timeout = setInterval(
     () => this.tick()
    , 1000);
  }
  render () {
    return <div>
      <h3>Hello, DOM!</h3>
      <h4>It is alive {this.state.time}.</h4>
      <Secondary/>
    </div>;
  }
}

export default Internal;
