import React, {useReducer} from 'react' 
import {reducer, initialState, ADD_ITEM, CLEAR, TOGGLE_TODO} from './reducers/reducer'


import './App.css';
import ListTodos from './components/ListTodos';
import Forms from './components/Forms'

function App() {
   const [state, dispatch] = useReducer(reducer, initialState)
   console.log(state)

   const AddItem=(e, item)=> {
    e.preventDefault();
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
    <div>
      <Forms AddItem={AddItem} />
      <ListTodos Clear={Clear} toggleItem={toggleItem} task={state.todos}/>
      
    </div>
  );
}

export default App;
