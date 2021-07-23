import { useState } from 'react';


export const useForm = ( initialState = {} ) => {
    
    const [formvalues, setFormvalues] = useState(initialState);

    const reset = () => {
        setFormvalues( initialState )
    }

    const handleInpuntChange = ( {target} ) => {
        

        setFormvalues({ 
            ...formvalues,
            [target.name]: target.value 
        });
    }

    return [ formvalues, handleInpuntChange, reset ];

}