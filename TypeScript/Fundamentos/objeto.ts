// const user = {
//     name: 'Alex',
//     age: 32,

//     showName() {
//         console.log(this.name);
//     }
// }

//console.log(user);
//console.log(user.name);
//user.showName();

class User {
    name: string = 'Alex Lekito'
    age: number = 32

    constructor(name: string, age: number) {
        this.name = name,
            this.age = age
    }

    showName = () => {
        console.log(this.name);
    }
}

const user = new User('Lekito', 32)
user.showName();

const otherUser = new User('Joao', 26)
otherUser.showName();
user.showName()
