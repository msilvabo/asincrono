const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve ('Async!!!'), 2000)
        : reject(new Error('ERROR...'))
    });
}

const AnotherFn = async () => {
    console.log('Initial');
    const something = await fnAsync();
    console.log(something);
    console.log('Finally');
}

console.log('Before');

AnotherFn();

