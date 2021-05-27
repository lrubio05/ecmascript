//Devolver la clave y los valores de una matriz
const data = {
    frontend: 'Luisa',
    backend: 'Fernanda',
    desing: 'Fer'
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//Object various
const data = {
    frontend: 'Luisa',
    backend: 'Fernanda',
    desing: 'Fer'
}
const values = Object.values(data);
console.log(values);
// Se agrega al inicio del string el valor indicado hasta completar con el número indicado
const string = 'Hello';
console.log(string.padStart(9,'hi'));
// Se agrega al final del string el valor indicado hasta completar con el número indicado
const string = 'Hello';
console.log(string.padEnd(9,'hi'));
console.log('Luisa'.padEnd(9,'---------'));
//Permite dejar la coma al fina del objeto
const obj = {
    valor :11,
}

//Async Await
const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    } catch (error){
        console.log(error);
    }
};
anotherFunction();