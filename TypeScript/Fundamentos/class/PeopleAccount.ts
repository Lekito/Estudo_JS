import { GoAccount } from "./GoAccount";

export class PeopleAccount extends GoAccount {
    private doc_id: number

    constructor(doc_id: number, name: string, accountNumber: number) {
        super(name, accountNumber)
        this.doc_id = doc_id;
    }
}