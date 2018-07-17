var initialState={
    userInput: "nothing yet"
}

const ADD_INPUT = "ADD_INPUT";


export default function reducer(state = initialState, action){
    switch(action.type){
        case ADD_INPUT:
            return Object.assign({}, state, {userInput:action.payload});
        default:
            return state;
    }
}


export function addInput(input){
    return{
        type: ADD_INPUT,
        payload: input
    }
}