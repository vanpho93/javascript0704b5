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

const p = arrPerson.find(e => e.height > 100);
const arr1 = arrPerson.filter(e => e.height > 120);

const arrHeight = arrPerson.sort((p1, p2) => p1.height - p2.height);

// console.log(arr1);
console.log(arrHeight);
