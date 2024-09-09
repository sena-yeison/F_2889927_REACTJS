import React, { useState } from "react";

const useHookAcces = (initForm = {} ) =>{

    const [formState, setFormState] = useState(initForm);

    // Llenar los datos del usuario
    const onInputChange = ({target}) =>{
        const { name, value } = target;
        setFormState({
            ...setFormState,
            [name]: value
        })
    }


    // Reseteamo el formulario
    const onResetForm = () =>{
        setFormState(initForm)
    }

    return{
        ...setFormState,
        setFormState,
        onInputChange,
        onResetForm
    }

}

export default useHookAcces;