import moment from 'moment';

export const calcularEdad = (fechaNacimiento) => {
    const fechaNacimientoMoment = moment(fechaNacimiento, 'YYYY-MM-DD');
    const fechaActual = moment();
    
    const anios = fechaActual.diff(fechaNacimientoMoment, 'years');
    const mesesDeNacido = fechaActual.diff(fechaNacimientoMoment, 'months');
    const diasDeNacido = fechaActual.diff(fechaNacimientoMoment, 'days');
  
    return { anios, mesesDeNacido, diasDeNacido };
}