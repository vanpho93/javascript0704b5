class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
}

const teo = new Person('Teo', 5, 180);
const ti = new Person('Ti', 36, 110);
const tun = new Person('Tun', 25, 190);

const arrPerson = [teo, ti, tun];

const isBiggerThan35 = arrPerson.some(person => person.age > 35 );

const isTall = arrPerson.every(e => {
    console.log('NNNN');
    return e.height > 100;
});

console.log(isBiggerThan35);
console.log(isTall);

//arrow function
// function check() {
//     for(let i = 0; i < arrPerson.length; i++) {
//         if (arrPerson[i].age > 35) return true;
//     }
//     return false;
// }

// console.log(check());