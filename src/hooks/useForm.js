import { useEffect, useMemo, useState } from 'react';
import { calcularEdad } from '../helpers/calcularEdad';
import { formatoBusqueda } from '../helpers/formatoBusqueda';
import { condicionesDeFiltro } from '../helpers/condicionesDeFiltro';

// Aqui implemente la logica del formulario para separar lo mayor posible la logica del componente 

export const useForm = ( initialForm = {}, formValidations = {} ) => {
      
    const [ formState, setFormState ] = useState( initialForm );    
    const [diagnosticosFiltrados, setDiagnosticosFiltrados] = useState([]);   
    const [formValidation, setFormValidation] = useState({});

    useEffect(() => {
    
        createValidators();
    }, [formState])
    
    const isFormValid = useMemo(() => {

        for (const formValue of Object.keys(formValidation)) {
            if(formValidation[formValue] !== null) return false; 
        }

        return true;
        
    }, [formValidation])


    const vaciarArreglo = () => {
        setDiagnosticosFiltrados([]);
    }
    
    const onInputChange = ({ target }) => {
        
        const { name, value } = target;
                
        if(name === 'busquedaDiagnostico' && value === '') {

            setDiagnosticosFiltrados([]);
            setFormState(prevState => ({
        
                ...prevState,
                [name]: value
        
            }));      
            return;
        }
          
        if(name === 'busquedaDiagnostico') {
    
            const format = calcularEdad(formState.fechaNacimiento);
            
            const anios = formatoBusqueda(format);      
            
            //CondicionesDeFiltro retorna un nuevo json con las condiciones de filtrado.
            setDiagnosticosFiltrados(condicionesDeFiltro(formState.sexo, anios, value));
    
        }
            
        setFormState(prevState => ({
    
            ...prevState,
            [name]: value

        }));
                  
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {

        const formCheckedValues = {};

        for (const formField of Object.keys( formValidations )) {
            const [fn, errorMessage ] = formValidations[formField];

            formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;

        }

        setFormValidation(formCheckedValues);
        
    }
        
    return {
        ...formState,
        diagnosticosFiltrados,
        formState,
        onInputChange,
        onResetForm,
        isFormValid,
        ...formValidation,
        vaciarArreglo
    }
}