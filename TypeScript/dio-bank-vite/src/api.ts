const conta = {
    email: 'alex@gmail.com',
    password: '123456',
    name: 'Alex Ribeiro',
    balance: 2000.00,
    id: "1"
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})