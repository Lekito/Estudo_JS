function getName() {
    return 'Alex Ribeiro Alves';
}

function logFn(fn) {
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);