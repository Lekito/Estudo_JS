export abstract class GoAccount {
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    // esse metodo não faz mais sentido pelo atributo ter recebido readonly. Não podendo mais ser editado apenas lido.
    // setName = (name: string): void => {
    //     this.name = name
    //     console.log('Nome alterado com sucesso!')
    // } 

    getName = (): string => {
        return this.name
    }

    setBalance = (balance: number): number => {
        return this.balance += balance
    }

    deposit = (balance: number): void => {
        if (this.validateStatus()) {
            this.balance = this.balance + balance
            console.log('Você depositou ' + balance + ' seu saldo é R$ ' + this.balance)
        }
    }

    withdraw = (balance: number): void => {
        if (this.validateStatus()) {

            if (this.balance >= balance) {

                this.balance = this.balance - balance

                console.log("Você sacou R$ " + balance + ' seu saldo atual é R$ ' + this.balance)
            } else {
                console.log('Saldo insuficiente! Caro ' + this.name + " , você tem em sua conta R$ " + this.balance + " e quer sacar R$" + balance)
            }

        }
    }

    getBalance = (): void => {
        console.log(this.balance)
    }

    validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        }

        throw new Error('Conta inválida')
    }
}