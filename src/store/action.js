export const INCREASE_COUNTER = 'increaseCounter';



export const initialState={
    initialCounter: 0
}


const customizationReducer= (state= initialState, action)=>{
        switch(action.type){
            case INCREASE_COUNTER :
                return {
                    ...state,
                    initialCounter: state.initialCounter+1
                }
            default :
            return state;
        }
}

export default customizationReducer;