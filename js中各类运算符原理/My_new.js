//
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
/**
 * 创建一个空的简单JavaScript对象（即{}）；
   链接该对象（即设置该对象的构造函数）到另一个对象 ；
   将步骤1新创建的对象作为this的上下文 ；
   如果该函数没有返回对象，则返回this。
   https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new
 */
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

