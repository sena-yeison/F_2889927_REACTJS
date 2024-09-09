import React, { useEffect, useState } from "react";

const useHookAcces = (initForm = {} ) =>{

    const [formState, setFormState] = useState(initForm);


    // Guardar datos en el storage
    const onInputChange = (initForm) =>{
       localStorage.setItem("user", JSON.stringify(initForm))
    }


    // Limpiamos el formulario
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