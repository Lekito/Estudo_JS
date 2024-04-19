import { GoAccount } from "./GoAccount"

export class CompanyAccount extends GoAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)

    }

    getLoan = (balance: number): void => {
        let balanceLoan: number
        if (this.validateStatus()) {
            balanceLoan = this.setBalance(balance)

            console.log('Você pegou R$ ' + balance + " de emprestimo. " + this.getName() + " saldo é R$ " + balanceLoan)
        }
    }

    deposit = (): number => {
        return 2
    }
}