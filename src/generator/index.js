function* iterate(array) {
    for (let value of array){
        yield value;
    }
} 

const it = iterate([10,20,30,40,50,60,70,80,90]);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.);