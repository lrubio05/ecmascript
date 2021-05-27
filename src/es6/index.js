//Default params y concatenación
//Versión inicial
function newFunction(name, age, country) {
    var name = name || 'Luisa';
    var age = age || 21;
    var country = country || 'Colombia';
    console.log(name, age, country);
}
//es6
function newFunction2(name = 'Luisa', age = 21, country = 'Colombia'){
    console.log(name, age, country);
}
newFunction2();
newFunction2('Daniel',25,'Colombia');

let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//LET y CONST, Multilínea, Spread Operator y Desestructuración

//Versión inicial salto de linea
let lorem = "En seis meses es mi graduación como ingeniera en telecomunicaciones, va a ser cool \n"
+ "Telecommunication engineer.";

//ES6 salto de linea
let lorem2 = `Otra frase epica, 
voy a completar la escuela de JS en platzi para mejorar mis skills
`;

console.log(lorem);
console.log(lorem2);

//objetos
let person = {
    'name' : 'Luisa',
    'age' : 22,
    'country' : 'CO'
}

console.log(person.name, person.age);
//es6
let {name, age, country} = person;
console.log(name, age, country);

//Modo de unión de diferentes elementos
let team1 = ['Oscar','Julian','Ricardo'];
let team2 = ['Luisa','Fernanda','Valeria'];

let education = ['David', ...team1, ...team2];//unir diferentes elementos de manera mas amigables

console.log(education);

//Let es una forma para trabajar las variables, solo disponible en el scope, en cambio var es de manera global

{
    var globalVar = "Global var";
}
{
    let globalLet = "Global Let";
    console.log(globalLet);
}

console.log(globalVar);

//const establecer una constante de la cual no va a permitir reasignar un valor, como en es siguiente caso, nos va a mostrar error debido a que primero asignamos b a la constante a y luego determinamos asignarle a a la constante a, por lo descrito anteriormente va a arrojar error ya que es un valor que no va a cambiar nunca
const a = 'b';
a = 'a';
console.log(a);

//Arrow Functions, Promesas y Parámetros en objetos -- Propiedad de objetos mejorada

let name = 'Fernanda';
let age = 21;
//es5
obj = { name: name, age: age };
//es6
obj2 = { name, age };
console.log(obj2);

//arrow function = sintaxis más reducida y un this no vinculable
const names = [
    {name: 'Luisa', age: 21},
    {name: 'Tatiana', age: 28}
]

let listOfNames = names.map(function(item){
    console.log(item.name);
});

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age) =>{
    console.log(item.name);
}

const listOfNames4 = name =>{
    console.log(item.name);
}

const square = num => num * num;

//Promesas, útil para el asincronismo, algo va a pasar (en algún momento o tiempo)

const helloPromise = () => {
    return new Promise ((resolve, reject) => {
        if(true){
            resolve('Hey!');
        } else {
            reject('Ups!');
        }
    });
}

helloPromise()
 .then(response => console.log(response))
 .then (() => console.log('Hola'))
 .catch (error => console.log(error));

//Clases, Módulos y Generadores

//Las clases nos facilitan la vida permitiendonos trabajar con programación orientada a objetos
class calculator {
    constructor(){//las clases necesitan un constructor, en este caso se asigna dentro del scope global
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}
const calc = new calculator();
console.log(calc.sum(4,4));

/*import { hello } from './module';

hello();*/

const hello = require('./module');
console.log(hello());
//Generator *
function* helloWorld(){
    if(true) {
        yield 'Hello, ';//permite retornar un valor, y guarda el estado de forma interna
    }
    if(true) {
        yield 'World';
    }
};
const gerenatorHello = helloWorld();
console.log(gerenatorHello.next().value);
console.log(gerenatorHello.next().value);
console.log(gerenatorHello.next().value);