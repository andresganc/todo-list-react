
import React, { Fragment, useRef } from 'react';
import { connect } from 'react-redux';

// Componentes
import updateWord from './store/palabra/actions';


const FormPalabra = ({ updateWord }) => {
    const palabraRef = useRef(null);
    return(
        <Fragment>
            <input type="text" ref={palabraRef} />
            <button onClick={ () => { updateWord( palabraRef.current.value ) } } > Guardar en la store </button>
        </Fragment>
    );
    
}

export default connect( null, { updateWord } ) (FormPalabra);