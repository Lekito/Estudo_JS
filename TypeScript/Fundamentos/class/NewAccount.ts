import { GoAccount } from "./GoAccount";

export class NewAccount extends GoAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    deposit = (balance: number): number => {
        let newDeposit: number = balance + 10
        let newBalance: number = this.setBalance(newDeposit)

        console.log('Você depositou R$ ' + newDeposit + ' seu saldo atual é : R$ ' + newBalance)

        return newBalance
    }
}