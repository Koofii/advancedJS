import React from 'react';

import { ValidatingForm } from './ValidatingForm'

export default (renderCallback) => {
    renderCallback(
        <ValidatingForm 
            getError={str => {
                if(str.length > 0 && str.length < 3){
                    return 'Input string mist be atleast three characters'
                }
                // Validation was succuessful.
                return null;
            }}
        />
    );
};