
const updateWord = palabra => {
    
    console.log( palabra );
    
    return {
        type: 'UPDATE_WORD',
        payload: palabra
    }
}

export default updateWord;