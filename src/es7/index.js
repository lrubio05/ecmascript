//Arreglo de numeros en el cual se valida con el includes el contenido del arreglo
let numbers = [1,2,3,7,8];
if (numbers.includes(9)) {
    console.log('Se encuentra el 7');
} else{
    console.log('No se encuentra el número');
}

//Cómo elevar a la potencia con **
let base = 3;
let exponent = 3;
let result = base ** exponent;

console.log(result);