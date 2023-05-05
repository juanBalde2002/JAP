/*Se requiere:
Una función que reciba en forma ordenada y preestablecida:
los datos de una persona (nombre, apellido y departamento en que vive),
junto con su puntaje en la evaluación de Fundamentos de Programación,
su puntaje en la evaluación de Programación Imperativa,
su puntaje en la evaluación de Programación Orientada a Objetos,
si cargó o no la evidencia en la evaluación de Fundamentos de Programación,
si cargó o no la evidencia en la evaluación de Programación Imperativa,
si cargó o no la evidencia en la evaluación de Programación Orientada a Objetivos,
su puntaje promedio en Inglés,
si hizo o no las 10 lecciones de Competencias transversales.
A partir de los datos recibidos, se pretende obtener en pantalla un texto cordial, que identifique a la persona y se le informe su status final, por ejemplo:
Hola María!!, el detalle de tu status final es:

En Inglés - 85 puntos- ok

En CT - 100 puntos - ok

En Técnica - 87 puntos - ok

Evidencias entregadas - 3 - ok

En conclusión, tu status final es aprobado con 87.

Recordar que para aprobar la fase 1:
La persona tiene que obtener en Inglés 50 puntos o más en el promedio de todas las semanas, y si no se llega a esos 50 puntos no se aprueba fase 1.

Además, debe haber realizado el 100% de las tutorías, y si no se llega a hacerlo no se aprueba fase 1.

Además, en la parte técnica el puntaje final se compone de: 30% de la evaluación de Fundamentos de Programación + 50% de la evaluación de Programación Imperativa + 20% de la evaluación de Programación Orientada a Objetos, si ese puntaje es mayor o igual a 60 y tiene las 3 entregas de evidencia, aprueba directamente, si el puntaje es mayor o igual a 60 pero le falta alguna de las evidencias, debe rendir un examen final con supervisión y obtener 60% o más para aprobar.

Si la persona subió las 3 entregas de evidencia y su puntaje final está en el rango de 50 a 59,99 podrá rendir el examen final con supervisión y para aprobar necestiará llegar al 60%.

Todos los otros casos reprueban fase 1.*/

function entregasRealizadas(entrega1,entrega2,entrega3){//Función que devuelva la cantidad de entregas realizadas.
    let arregloBol=[entrega1,entrega2,entrega3];
    let cant=0;
    for( let i = 0;i<arregloBol.length;i++){
        if (arregloBol[i]===true){
            cant++;
        }
    }
    return cant;
}


function jovenesAProgramar(nombre,apellido,depto,funProg,progImp,progOrObj,evFP,evPI,evPOO,promIng,compTr){
    let promedioTecnica= (funProg*0.3)+(progImp*0.5)+(progOrObj*0.2);
    if ((promedioTecnica>60)&&(entregasRealizadas(evFP,evPI,evPOO)===3)&&(promIng>49)&&(compTr===10)){
        console.log(`Hola ${nombre}!!, el detalle de su status final es: `);
        console.log(`En Inglés - ${promIng} puntos-ok`);
        console.log(`En CT - 100 puntos-ok`);
        console.log(`En técnica -${promedioTecnica} puntos- ok`);
        console.log(`Evidencias entregadas - 3 - ok`);
        console.log(`En conclusion, tu status final es aprobado con:${promedioTecnica}`);
    }
    else if (((promedioTecnica>=50)&&(promedioTecnica<60))&&(entregasRealizadas(evFP,evPI,evPOO)===3)&&(promIng>49)&&(compTr===10)){
       console.log(`Hola ${nombre}!!, el detalle de su status final es: `);
       console.log(`En Inglés - ${promIng} puntos-ok`);
       console.log(`En CT - 100 puntos-ok`);
       console.log(`En técnica -${promedioTecnica} puntos- ok`);
       console.log(`Evidencias entregadas - 3 - ok`);
       console.log(`En conclusion, debes rendir exámen supervisado`);
    }
    else if ((promedioTecnica>60)&&(entregasRealizadas(evFP,evPI,evPOO)<3)&&(promIng>49)&&(compTr===10)){
       console.log(`Hola ${nombre}!!, el detalle de su status final es: `);
       console.log(`En Inglés - ${promIng} puntos-ok`);
       console.log(`En CT - 100 puntos-ok`);
       console.log(`En técnica -${promedioTecnica} puntos- ok`);
       console.log(`Evidencias entregadas - ${entregasRealizadas(evFP,evPI,evPOO)} - ok`);
       console.log(`En conclusion, debes rendir exámen supervisado`);
    }
    else if ((compTr<10)||(promIng<50)){
       console.log(`Hola ${nombre}!!, el detalle de su status final es: `);
       console.log(`En Inglés - ${promIng} puntos-ok`);
       console.log(`En CT - ${compTr*10} puntos-ok`);
       console.log(`En técnica -${promedioTecnica} puntos- ok`);
       console.log(`Evidencias entregadas - ${entregasRealizadas(evFP,evPI,evPOO)} - ok`);
       console.log(`En conclusion, no aprueba fase 1`);
    }
    else{
        console.log(`Hola ${nombre}!!, el detalle de su status final es: `);
        console.log(`En Inglés - ${promIng} puntos-ok`);
        console.log(`En CT - ${compTr*10} puntos-ok`);
        console.log(`En técnica -${promedioTecnica} puntos- ok`);
        console.log(`Evidencias entregadas - ${entregasRealizadas(evFP,evPI,evPOO)} - ok`);
        console.log(`En conclusion, no aprueba fase 1`);
    }
}
//casos de prueba:
jovenesAProgramar("juan","baldenegro","mvd",67,98,87,true,true,true,87,10); //Aprueba la fase.
jovenesAProgramar("juan","baldenegro","mvd",67,98,87,true,true,true,87,8);//No entrego el 100% de las tutorias. No Exonera.
jovenesAProgramar("juan","baldenegro","mvd",67,98,87,true,true,true,43,10);//No alcanza el promedio minimo den Ingles. No Exonera.
jovenesAProgramar("juan","baldenegro","mvd",67,98,87,true,true,false,87,10);//Falta una entrega.Rinde exámen.
jovenesAProgramar("juan","baldenegro","mvd",50,60,40,true,true,true,87,10);//Promedio entre 50 y 59.Rinde Exámen.

