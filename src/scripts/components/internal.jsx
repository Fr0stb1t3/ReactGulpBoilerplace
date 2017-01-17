import React from "react";


class Internal extends React.Component {
  constructor(props){
    super(props);
    /*
    var timeVar = new Date().toLocaleTimeString();
    this.state = {
      time: timeVar
    };*/
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
    //clearInterval(this.timeout);
  }
  componentDidMount(){
    /*
    this.timeout = setInterval(
     () => this.tick()
    , 1000);
    */
  }
  render () {
    return (<div>
      <h3>Hello, DOM!</h3>
    </div>);
  }
}

export default Internal;
