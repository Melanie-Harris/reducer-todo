import React, {useReducer} from 'react' 
// named imports go in {}
import {reducer, initialState, ADD_ITEM, CLEAR, TOGGLE_TODO} from './reducers/reducer'


import './App.css';
import ListTodos from './components/ListTodos';
import Forms from './components/Forms'

function App() {
   const [state, dispatch] = useReducer(reducer, initialState)
   console.log(state)

  //  this is the function we set on the form
   const AddItem=(e, item)=> {
    //  prevent the default aas this is going to go on the form. as the event (e) we are preventing the default. e is being passed down to prevent default
    e.preventDefault();
    // this is written just like setstate, the dispatch takes a type and a payload. parenthesis then it taks an oject
    // the 2nd paramter is set in the payload as the key or value
    dispatch({type: ADD_ITEM, payload: item})
   }
   const Clear=(e)=>{
     e.preventDefault();
     dispatch({type: CLEAR})
   }
   const toggleItem=(id)=>{
     dispatch({type: TOGGLE_TODO, payload: id})
   }

  return (
    <div className="App-header">
      {/*  pass functions in components as props */}
      <Forms AddItem={AddItem} />
      <ListTodos Clear={Clear} toggleItem={toggleItem} task={state.todos}/>
      
    </div>
  );
}

export default App;
