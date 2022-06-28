const fnAsync = () => {
    return new Promise((resolve, reject) =>{
        (true)
        ? setTimeout(() =>resolve('Async!!!!!'), 4000)
        : reject(new Error('Error'));
    });
}

const anotherFn = async () => {
    const result = await fnAsync();    
    console.log(result);
    console.log('Finally');
}

console.log('Before');
anotherFn();
console.log('After');