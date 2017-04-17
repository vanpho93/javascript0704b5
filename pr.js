function Person(name, age, cash) {
    this.name = name;
    this.age = age;
    this.getCash = function() {
        return cash;
    }
    this.setCash = function(c) {
        if (c > 0) {
            cash = c;
        } 
    }
}
const khoa = new Person('Dang Khoa', 30, 100);
khoa.height = 100;
khoa.chao = function() {
    console.log('XIN CHAO');
}
console.log(khoa);
khoa.chao();
// console.log(khoa.getCash());
// khoa.setCash(-1000);
// console.log(khoa.getCash());
