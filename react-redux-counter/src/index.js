import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {bindActionCreators, createStore} from 'redux';

//store -globalized state 

//action-increment- returns an object
const increment=()=>{
  return{
    type:'increment'
  }
}
const decrement=()=>{
  return{
    type:'decrement'
  }
}

//reducer
const counter=(state=0,action)=>{
  switch(action.type){
    case 'increment':
      return state+1;

    
    case 'decrement':
      return state-1;
    

  }
};

let store= createStore(counter);


//dispatch

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
