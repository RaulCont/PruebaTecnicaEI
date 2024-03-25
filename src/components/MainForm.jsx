import { useState } from 'react';
import { useForm } from '../hooks/useForm';
import Swal from 'sweetalert2';



export const MainForm = () => {

  const [formSubmitted, setFormSubmitted] = useState(false);

  const formData = {
    nombre: '',
    fechaNacimiento: '',
    sexo: '',
    temperatura: '',
    estatura: '',
    peso: '',
    saturacionOxigeno: '',
    motivoConsulta: '',    
  }

  // objeto que valida el formulario con funciones basicar para la validacion 
  const formValidations = {
    nombre: [ (value) => value.length > 1, 'Ingresa un nombre valido'],
    fechaNacimiento: [ (value) => value.length > 1, 'Ingresa una fecha de nacimiento valida'],
    sexo: [ (value) => value.length > 1, 'Ingresa un sexo'],
    temperatura:[ (value) => value.length > 1, 'Ingresa la temperatura'],
    estatura:[ (value) => value.length > 1, 'Ingresa la estatura'],
    peso:[ (value) => value.length > 1, 'Ingresa tu estatura'],
    saturacionOxigeno:[ (value) => value.length > 1, 'Ingresa la saturacion de oxigeno'],
    motivoConsulta: [ (value) => value.length > 1, 'ingresa el motivo de la consulta']    
  }
  // Custom hook para validar y utilizar formulario de forma dinamica 
  const { 
    formState, 
    onInputChange, 
    diagnosticosFiltrados, 
    vaciarArreglo, 
    isFormValid,
    nombreValid,
    fechaNacimientoValid,
    sexoValid,
    temperaturaValid,
    estaturaValid,
    pesoValid,
    saturacionOxigenoValid,
    motivoConsultaValid
  } = useForm(formData, formValidations);

  const handleOptionClick = (option) => {

    let target = {
      name: 'busquedaDiagnostico',
      value: option
    }
    
    onInputChange({target});
    vaciarArreglo();

  }
    
  const handleSubmit = (event) => {    
    event.preventDefault();
    setFormSubmitted(true);
    
    if(isFormValid && formState.busquedaDiagnostico) {
      Swal.fire('Formulado enviado', 'Formulario enviado con exito' ,'success');
    } else {
      Swal.fire('Error', 'Ingresa todos los campos del formulario', 'error')
    }
    
  };

  return (
    <div className="container mt-4 ">
      <div className='d-flex justify-content-center bg-info rounded p-4'>
        
        <form onSubmit={handleSubmit} className=''>
          <h1 className="mb-4">Formulario de Paciente</h1>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label" style={{fontWeight: 'bold'}}>Nombre</label>                    
            <input placeholder='Ingresa el nombre completo del paciente' type="text" id="nombre" name="nombre" className="form-control" value={formState.nombre} onChange={onInputChange} />
          </div>

          {
            !!nombreValid && formSubmitted ? <p style={{color: 'red', fontWeight: 'bold'}}>Ingresa un nombre valido</p> : null
          }
         
          <div className="mb-3">
            <label htmlFor="fechaNacimiento" className="form-label" style={{fontWeight: 'bold'}}>Fecha de Nacimiento</label>
            <input type="date" id="fechaNacimiento" name="fechaNacimiento" className="form-control" value={formState.fechaNacimiento} onChange={onInputChange} />
          </div>

          {
            !!fechaNacimientoValid && formSubmitted ? <p style={{color: 'red', fontWeight: 'bold'}}>Ingrese una fecha de nacimiento</p> : null
          }

          <div className="mb-3">
            <label htmlFor="sexo" className="form-label" style={{fontWeight: 'bold'}}>Sexo</label>
            <select id="sexo" name="sexo" className="form-select" value={formState.sexo} onChange={onInputChange}>
              <option value="">Seleccione...</option>
              <option value="Hombre">Hombre</option>
              <option value="Mujer">Mujer</option>
            </select>
          </div>

          {
            !!sexoValid && formSubmitted ? <p style={{color: 'red', fontWeight: 'bold'}}>Ingrese un sexo</p> : null
          }

          <div className="mb-3">
            <label htmlFor="temperatura" className="form-label" style={{fontWeight: 'bold'}}>Temperatura</label>
            <input placeholder='Ingresa la temperatura de el paciente' type="number" id="temperatura" name="temperatura" className="form-control" value={formState.temperatura} onChange={onInputChange} />
          </div>

          {
            !!temperaturaValid && formSubmitted ? <p style={{color: 'red', fontWeight: 'bold'}}>Ingrese una temperatura</p> : null
          }

          <div className="mb-3">
            <label htmlFor="estatura" className="form-label" style={{fontWeight: 'bold'}}>Estatura</label>
            <input placeholder='Ingrese la estatura del paciente' type="number" id="estatura" name="estatura" className="form-control" value={formState.estatura} onChange={onInputChange} />
          </div>

          {
            !!estaturaValid && formSubmitted ? <p style={{color: 'red', fontWeight: 'bold'}}>Ingrese una estatura</p> : null
          }

          <div className="mb-3">
            <label htmlFor="peso" className="form-label" style={{fontWeight: 'bold'}}>Peso</label>
            <input placeholder='Ingrese el peso del paciente' type="number" id="peso" name="peso" className="form-control" value={formState.peso} onChange={onInputChange} />
          </div>

          {
            !!pesoValid && formSubmitted ? <p style={{color: 'red', fontWeight: 'bold'}}>Ingrese un peso</p> : null
          }

          <div className="mb-3">
            <label htmlFor="saturacionOxigeno" className="form-label" style={{fontWeight: 'bold'}}>Saturación de Oxígeno</label>
            <input placeholder='Ingrese la saturación de oxígeno del paciente' type="number" id="saturacionOxigeno" name="saturacionOxigeno" className="form-control" value={formState.saturacionOxigeno} onChange={onInputChange} />
          </div>

          {
            !!saturacionOxigenoValid && formSubmitted ? <p style={{color: 'red', fontWeight: 'bold'}}>Ingrese la saturacion de oxígeno</p> : null
          }

          <div className="mb-3">
            <label htmlFor="motivoConsulta" className="form-label" style={{fontWeight: 'bold'}}>Motivo de Consulta</label>
            <input placeholder='Ingrese el motivo de la consulta' type="text" id="motivoConsulta" name="motivoConsulta" className="form-control" value={formState.motivoConsulta} onChange={onInputChange} />
          </div>

          {
            !!motivoConsultaValid && formSubmitted ? <p style={{color: 'red', fontWeight: 'bold'}}>Ingrese el motivo de su consulta</p> : null
          }

          <div className= 'mb-3'>
            <label htmlFor="busquedaDiagnostico" className="form-label" style={{fontWeight: 'bold'}}>Busqueda de diagnostico</label>
            <input 
              disabled={ formState.nombre !== '' && formState.fechaNacimiento !== '' &&  formState.sexo !== '' && formState.temperatura !== 0 && formState.estatura !== 0 && formState.peso !== 0 && formState.saturacionOxigeno !== 0 && formState.motivoConsulta !== '' ? false : true }               
              type="text" id="busquedaDiagnostico" 
              name="busquedaDiagnostico" className="form-control" 
              value={formState.busquedaDiagnostico} onChange={onInputChange} 
              placeholder={!isFormValid ? 'Para buscar un diagnostico rellene todos los campos': 'Buscar diagnostico'}
            />
          </div>
                                                                              
          <ul className="list-group mb-3" style={{ maxHeight: '300px', overflowY: 'auto', maxWidth: '400px' }}>
            {
              diagnosticosFiltrados.length === 0 ? null : diagnosticosFiltrados.map((d, index) => (
                <li 
                  key={index} 
                  className="list-group-item"
                  onClick={() => handleOptionClick(d.nombre)}
                >
                  {d.catalog_key} - {d.nombre}
                </li>
              ))
            }
          </ul>

          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
    </div>

  );
};