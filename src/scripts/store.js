import {combineReducers, createStore } from "redux";
const defaultUser = {
  "user":{
    "name": "Will",
    "age" : 35
  }};

const userReducer = (state = {},action) =>{
  if(action.type==="CHANGE_USER"){
    state = action.payload;
  }

  if(action.type==="CHANGE_AGE"){
    state = {...state, age: action.payload};
  }
  return state;
};

const tweetsReducer = (state = [],action) =>{
    return state;
};

const reducers = combineReducers({
    user: userReducer,
    tweets: tweetsReducer
});
const store = createStore(reducers);

export default store;
