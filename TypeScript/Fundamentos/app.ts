// Go Banking
// name, accountNumber
// depositar(deposit) / sacar(withdraw)
import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Alex', 1033)
console.log(peopleAccount);

const companyAccount: CompanyAccount = new CompanyAccount('Dio', 20)
// console.log(companyAccount);
companyAccount.deposit();

peopleAccount.setName('Alex Ribeiro')
console.log(peopleAccount)
console.log(peopleAccount.getName())
peopleAccount.deposit()