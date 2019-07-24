export const initialState = {
    todos: [
        {
            task: 'workout',
            id: 123,
            completed: false
        },
        {
            task: 'study',
            id: 124,
            completed: false
        },
        {
            task: 'meditate',
            id: 1235,
            completed: false
        },
        {
            task: 'code',
            id: 1246,
            completed: false
        },
    ]
};

// reducer hook to set up state in the component
export const ADD_ITEM = "ADD_ITEM"
export const CLEAR= "CLEAR"
export const TOGGLE_TODO="TOGGLE_TODO"

export const reducer= (state, action) => {
    switch(action.type){
        case ADD_ITEM:
            const newItem = {task:action.payload, completed:false, id:Date.now()}
            return{
                ...state,
                todos:[...state.todos, newItem]
            };
        case TOGGLE_TODO: 
            return{
                ...state,
                todos: state.todos.map((items)=>{
                    if (action.payload === items.id){
                        return {...items, completed: !items.completed}
                    }return items
                })
            }    
        case CLEAR: 
            return{
                ...state,
                todos: state.todos.filter(todo=>
                    !todo.completed
                )

                }
            default: return state;
    }
};