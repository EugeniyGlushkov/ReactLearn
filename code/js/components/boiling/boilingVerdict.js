import React from 'react';

function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return(
            <p>Water is boiling.</p>
        )
    };

    return(
        <p>Water is not boiling.</p>
    );
}

export default BoilingVerdict;