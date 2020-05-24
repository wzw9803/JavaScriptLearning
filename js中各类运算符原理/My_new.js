// 实现一个new
var Dog = function (name) {
    this.name = name
}
Dog.prototype.bark = function () {
    console.log('wangwang')
}
Dog.prototype.sayName = function () {
    console.log('my name is ' + this.name)
}
let sanmao = new Dog('三毛')
sanmao.sayName()
sanmao.bark()
// new 的作用
// 创建一个新对象obj
// 把obj的__proto__指向Dog.prototype 实现继承
// 执行构造函数，传递参数，改变this指向 Dog.call(obj, ...args)
// 最后把obj赋值给sanmao
var _new = function () {
    console.log(arguments)
    let constructor = Array.prototype.shift.call(arguments)
    console.log(constructor)
    let args = arguments
    console.log(args)
    const obj = new Object()
    obj.__proto__ = constructor.prototype
    constructor.call(obj, ...args)
    return obj
}

let _new1 = function (fn, ...arg) {
    const obj = Object.create(fn.prototype);
    const ret = fn.apply(obj, arg);
    return ret instanceof Object ? ret : obj;
}

let _new2 = function () {
    const obj = {}
    const Constructor = Array.prototype.shift.call(arguments)

    obj.__proto__ = Constructor.prototype
    const result = Constructor.apply(obj, arguments)

    return result instanceof Object ? result : obj
}
var simao = _new(Dog, 'simao')
simao.bark()
simao.sayName()
console.log(simao instanceof Dog) // true