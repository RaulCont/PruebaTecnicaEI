import { diagnosticos } from "./json";


export const condicionesDeFiltro = (sexo, anios, nombre) => {
    
    if(sexo === "Mujer") {
                      
        return diagnosticos.filter(element => element.lsex !== 'HOMBRE' && element.nombre.includes(nombre.toUpperCase()) && element.linf <= anios && element.lsup >= anios)

    } else {

        return diagnosticos.filter(element => element.lsex !== 'MUJER' && element.nombre.includes(nombre.toUpperCase()) && element.linf <= anios && element.lsup >= anios );

    }

}
