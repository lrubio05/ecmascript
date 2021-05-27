//--------------method flat---------------/
//devolver una matriz con una submatriz aplanada, 
//recibe como argunmento la profundidad
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));
let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat(2));

//-------------flatMap---------------------------/
//mapear cada elemento, luego pasarle una funcion y aplanar
let array = [1,2,3,3,4,5];
console.log(array.flatMap(value => value * 2));

//trim- eliminar espacios en blanco de un string
let hello ='        hello world';
console.log(hello);
console.log(hello.trimStart());
let hello ='hello world         ';
console.log(hello);
console.log(hello.trimEnd());

//-------------optional catch biding-------------/
try{

}catch/*(error) ya no es necesario colocarlo*/{
    error
}
//-------------fromEntries----------------------/
// array to object
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries));

//-------------symbol object--------------------/
let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);