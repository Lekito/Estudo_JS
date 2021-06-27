const user = {
    name: "Alex",
    lastName: 'Ribeiro Alves'
};

function getUserWithFullName(user){
    return {
        ...user,
        fullName: `Meu nome completo é ${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName, user);