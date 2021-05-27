//SIn necesidad de deconstruir se guarda en otra variable parte del objeto
const obj = {
    name: 'Fernanda',
    age: 21,
    country: 'CO'
};
let {name, ...all } = obj;
console.log(all);

//Se puede traer elementos de otro objeto, esto evita que se deba volver a escribir todo nuevamente
const obj1 = {
    ...obj,
    country: 'CO'
};
console.log(obj1);

//Construcción de una promesa
const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'),5000)
        : reject(new Error('Test Error'))
    });
};

helloWorld()
 .then(response => console.log(response))
 .catch(error => console.log(error))
 .finally(() => console.log('Finalizo'))

//
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2021-05-26');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year,month,day);