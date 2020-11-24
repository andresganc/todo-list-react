
const initialState = {palabra: "" };

// action es el valor devuelto por el action
// action.payload sera el valor que quiero añadir, borrar, etc

export default ( state = initialState, action ) => {
    if ( action.type === 'UPDATE_WORD' ) {
        return{
            ...state,
            palabra: action.payload
        }
    }

    return state;

}

