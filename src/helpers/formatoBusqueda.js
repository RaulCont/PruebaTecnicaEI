

export const formatoBusqueda = (infoCliente) => {
    
    const {anios, diasDeNacido, mesesDeNacido} = infoCliente;
   
    if(diasDeNacido <= 31) {
        const paddedAge = String(diasDeNacido).padStart(3, '0');
        console.log(`${paddedAge}`);
            
        return {
            linf: `${paddedAge}D`,
            lsex: 'MUJER',
        }
    }

    if(mesesDeNacido <= 12) {

        const paddedAge = String(mesesDeNacido).padStart(3, '0');
        console.log(`${paddedAge}M`);
            
        return {
            linf: `${paddedAge}M`,
            lsex: 'MUJER',
        }

    }

    // if (anios < 0 || anios > 120) {
    //     throw new Error('La anios debe estar entre 0 y 120 años.');
    // }
   
    // Convertir la anios a una cadena de 3 dígitos
    const paddedAge = String(anios).padStart(3, '0');

    // Agregar la letra 'A' al final para indicar años    
    
    return `${paddedAge}A`;

}
