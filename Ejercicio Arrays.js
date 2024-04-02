/* Ejercicio  arrays */

/* 1)Declarar un array que vamos a llamar “clasificaciones” con los siguientes valores:
Marcos, Franco, Agostina, Leon, Juan Cruz,Eduardo */

/* (vamos a suponer que esa es la orden de clasificación de un concurso) */

/* 2)recorre el array (clasificaciones) e Imprime la clasificación actual.
 (realizar una funcion "mostrarClasificacion()" esa funcion debe recorrer el array con un bucle for y mostrar la clasificacion) */

//modo Correcto ForEach (pueod usar tambien document.write)

/* 3)El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array: */
/* a)Leon adelanta a Agostina */

/* b)Eduardo es descalificado y se elimina del concurso */

/* c)Detrás de Marcos y antes de Franco se clasifican dos nuevas concursantes: Julieta y Martina, en ese orden */

/* d)Hay una nueva participante que pasa a encabezar la clasificación: Alicia */

/* e)muestra la clasificación actualizada (mostrarClasificacion())y comprueba que se ha hecho correctamente  */

let clasificaciones = ["Marcos", "Franco", "Agostina", "Leon", "Juan Cruz", "Eduardo"];

let mostrarClasificacion = () => {
    for (let i = 0; i < clasificaciones.length; i++) {
      console.log(clasificaciones[i]);
    }
}
mostrarClasificacion();

// función para cambiar orden de clasificación
let cambiarOrden = (clasificaciones, index1, index2)=>{
    let lista = clasificaciones[index1];
    clasificaciones[index1] = clasificaciones[index2];
    clasificaciones[index2] = lista;
}
cambiarOrden(clasificaciones,2,3);
console.log(clasificaciones);

//Eliminar a Eduardo y mostrar la clasficicación como quedó
clasificaciones.pop();
console.log(clasificaciones);

// Agregar dos nuevas participantes entre Marcos y Franco
clasificaciones.splice(1,0, "Julieta", "Martina");
console.log(clasificaciones);

// Nueva particpiante pasa al frente de la clasificación
clasificaciones.unshift("Alicia");
console.log(clasificaciones);

// utilizar la función mostrarClasificación para ver si se efectuaron los cambios.
mostrarClasificacion(); 
