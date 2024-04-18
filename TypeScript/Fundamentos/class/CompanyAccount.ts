import { GoAccount } from "./GoAccount"

export class CompanyAccount extends GoAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    getLoan = (): void => {
        console.log('Você pegou um emprestimo!')
    }

    deposit = (): number => {
        return 2
    }
}