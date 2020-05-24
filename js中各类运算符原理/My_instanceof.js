/**
 * 简单来说就是判断构造器的 prototype 是否是实例对象的原型
 *
 * @param {object} obj
 * @param {Function} constructor
 */

function instanceOF(obj, constructor) {
    let type = typeof constructor;
    if (!(constructor !== null && (type === 'object' || type === 'function'))) {
        throw new TypeError(`Right-hand side of 'instanceof' is not an object`);
    } else if (typeof constructor !== 'function') {
        throw new TypeError(`Right-hand side of 'instanceof' is not callable`);
    }
    return constructor.prototype.isPrototypeOf(obj);
}

function instanceOf(obj, constructor){
    let type = typeof constructor;
    
    //判断 constructor 是否是对象
    if(!(constructor !== null && (type === 'object' || type === 'function'))){
        console.warn('not a object');
    }else if(type !== 'function'){  //判断是否是构造函数
        console.warn('is not callable')
    }

    return constructor.prototype.isPrototypeOf(obj);
}

let a = {name : 'abc'};

console.log(a instanceof Object);
console.log(typeof Object);
console.log(instanceOf(a, Object));
