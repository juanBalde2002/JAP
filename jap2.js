const readlineSync = require('readline-sync');

//Retorna true si el garage esta abierto.
function EstaAbierto(horario) {
    return (horario < 22) && (horario >= 10);
}

//Retorna true si hay espacio disponible en el garage.
function HayLugar(arreglo) {
    return (arreglo.length < 6);
}

//Retorna el monto que debe abonar el usuario al retirar el vehículo.
function CalculoMonto(HoraSalida, HoraEntrada) {
    return (((HoraSalida - HoraEntrada) ) * 250);
}


//programa principal
let ArregloGarage = [];//Inicializamos el arreglo que va a representar los lugares del garage.

function Garage() {
    horario = parseInt(readlineSync.question("Ingrese el horario en el que visita nuestro local: "));
    if (EstaAbierto(horario)) { //Ingresa al if si el llamado a la función devuelve true.
        let decision = parseInt(readlineSync.question("Que desea hacer? Ingrese 1 si desea registrar un auto, ingrese 2 si desea retirar un auto: "));
       //Dependiendo de la decisión que tome el usuario, la acción que el programa ejecutará.
        if (decision === 1) { //El usuario desea ingresar un vehículo.
            if (HayLugar(ArregloGarage)) { //El sistema verifica si hay lugar disponible.
                let matricula = readlineSync.question("Ingrese la matrícula del vehículo: ");
                ArregloGarage.push(matricula); //Agrega al arreglo el vehículo con su matricula correspondiente.
                console.log(`Su vehículo con matrícula ${matricula} fue registrado correctamente`);
            } else {
                console.log("No hay lugar");
            }
        }
        else if (decision === 2) { //El usuario desea retirar su vehículo.
            let retiro = readlineSync.question("Ingrese la matrícula del vehículo a retirar: ");
            let indice = ArregloGarage.indexOf(retiro);
            if ( indice != -1) {
                let HoraEntrada = parseInt(readlineSync.question("Ingrese la hora de entrada: "));
                let HoraSalida = parseInt(readlineSync.question("Ingrese hora de salida: "));
                if(EstaAbierto(HoraSalida) && EstaAbierto(HoraEntrada)){  //Chequeo de que el usuario quiere retirar su vehículo en horario hábil.
                let MontoAPagar = CalculoMonto(HoraSalida, HoraEntrada); //Llamado a la función que devolver el monto a abonar.
                let autoRetirado = ArregloGarage.splice(indice, 1); //Elimina el auto correspondiente a la matricula ingresada del arreglo, quedando ese lugar disponible.
                console.log(`Usted debe abonar $${MontoAPagar}`);
                console.log(`El vehículo de matrícula ${autoRetirado} fue retirado correctamente`);
                }else{
                    console.log("El garage estara cerrado, vuelva en el horario de atencion, jefe.")
                }
            } else {
                console.log("La matrícula no se encuentra registrada"); //La matricula ingresada por el usuario no se encuentra en el sistema.
            }
        }
    }
    else {
        console.log("Esta Cerrado, el horario es de 10 a 22"); //Garage cerrado.
        
    }
} 
// tests
Garage();
