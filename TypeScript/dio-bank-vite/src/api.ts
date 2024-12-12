const conta = {
    email: 'alex@gmail.com',
    password: '123456',
    name: 'Alex Ribeiro'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})