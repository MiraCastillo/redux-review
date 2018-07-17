var initialState={
    userInput:""
}

const ADD_INPUT = "ADD_INPUT";


export function reducer(state = initialState, action){
    switch(action.type){
        case ADD_INPUT:
            return Object.assign({}, state, {userInput:action.payload})
    }
}


export function addInput(input){
    console.log(input)
    return{
        type: ADD_INPUT,
        action: input
    }
}