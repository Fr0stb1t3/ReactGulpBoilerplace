var React = require('react');
import store from '../store/store.js';


class ReduxComponent extends React.Component {
  ageInput: int
  componentDidMount(){
    store.subscribe( ()=> {
        console.log(store);
        console.log("Store changed", store.getState());
    } );
  }

  handleClick() {
    //console.log(store.getState());
    store.dispatch({
        type:"CHANGE_USER",
        payload:{
            "name": "Will",
            "age" : 35
          }
      });


  }

  changeAge(e){
    console.log(e);
    /*
    store.dispatch({
        type:"CHANGE_AGE",
        payload: 25
    });*/
  }

  render () {
    ageInput(e){
      console.log(this.state);
      console.log(e.target.value);
    }
    return (<div>
      <h5>Hello, This is a secondary element!</h5>
      <button onClick={(e) => this.handleClick(e)}>
        Set User
      </button>
      <button onClick={(e) => this.changeAge(e)}>
        Set Age
      </button>
      <input type="text" onChange={ageInput} defaultValue="24"/>
    </div>);
  }
}

export default ReduxComponent;
