function sum(a,b){
    return a+b;
}
function rest(a,b){
    return a-b;
}
function mult(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}

function calc(num1,num2,callback){
    return callback(num1,num2);
}

let valor1 = 2
let valor2 = 3
console.log('suma ',calc(valor1,valor2,sum));
console.log('resta ',calc(valor1,valor2,rest));
console.log('multiplica ',calc(valor1,valor2,mult));
console.log('divide ',calc(valor1,valor2,div));


function gretting(name){
    console.log(`Hola ${name}`);
}

setTimeout(gretting,2000,'Moises');