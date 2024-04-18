import { GoAccount } from "./GoAccount";

export class PeopleAccount extends GoAccount {
    doc_id: number

    constructor(doc_id: number, name: string, accountNumber: number) {
        super(name, accountNumber)
        this.doc_id = doc_id;
    }
}