//in this case 'state' is not application state. Only the state that the reducer is responsible for
export default function(state = null, action){
    
    switch(action.type) {
        case 'BOOK_SELECTED':
        return action.payload;
    }

    return state;
} 