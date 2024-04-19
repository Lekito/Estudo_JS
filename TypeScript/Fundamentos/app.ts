// Go Banking
// name, accountNumber
// depositar(deposit) / sacar(withdraw)
import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Alex', 1033)
console.log(peopleAccount);

const companyAccount: CompanyAccount = new CompanyAccount('Dio', 20)
// console.log(companyAccount);
// companyAccount.deposit();

// peopleAccount.setName('Alex Ribeiro')
// console.log(peopleAccount)
// console.log(peopleAccount.getName())
peopleAccount.deposit(20)
console.log(peopleAccount)
peopleAccount.deposit(300.5)
peopleAccount.withdraw(100)
peopleAccount.withdraw(1000)
peopleAccount.withdraw(220.5)
peopleAccount.withdraw(15)

companyAccount.getLoan(1500)
