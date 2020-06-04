## 字节跳动一面

- 第一题

  ```javascript
  function Foo() {
      getName = function(){ console.log(1); };
      return this;
  }
  Foo.getName = function() { console.log(2); };
  Foo.prototype.getName = function(){ console.log(3); };
  var getName = function() { console.log(4); };
  function getName(){ console.log(5); }
  
  Foo.getName(); // 2
  getName(); // 4
  Foo().getName(); // 1
  getName(); // 1
  new Foo.getName(); // 2
  new Foo().getName(); // 3
  ```

  > 第5行：([Function | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function))每个 JavaScript 函数实际上都是一个 `Function` 对象。所以`Foo.getName`是在给Foo对象添加了一个getName属性，该属性指向一个匿名函数。所以第10行，打印为2。
  >
  > 第7、8行：由于**函数声明**有变量名提升的属性，所以第8行使用**函数声明**的`function getName`被第7行的**函数表达式**`var getName`覆盖，并且由var、function声明的全局变量为顶层对象的属性，所以在第12行运行后，由Foo在非严格模式下，所以里面的未声明变量`getName`也为全局变量，也是顶层对象的属性，所以其覆盖了第7行的变量。([var | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/var)、[let | ES6](https://es6.ruanyifeng.com/#docs/let))
  >
  > 第14、15行：([new | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new))
  >
  > ![](https://gitee.com/wzw9803/wzwImages/raw/master/img/20200604124528.png)

- 第二题

  ```javascript
  function a (){
     let b = 0;
     return {
             b: 2,
            set(n) {
                 b = n
         },
           get () {
                 return b;
             }
     }
  }
  
  let c = a();
  console.log(c.get());//0
  c.set(10);
  console.log(c.get());//10
  ```

- 第三题

  ```javascript
  //遍历二叉树，或者求出数组深度
  
  class Node {
          constuctor () {
              this.v = 1;
              this.left = null;
              this.right = null;
          }
  }
  
  const  a = [1, [3, [4, [5]], [6]], [2]];
  //解法一：
  let depth = 0;
  let queue = [];
  function getArrayMaxDepth( arr, dep ) {
  
    arr.forEach(element => {
      if(Array.isArray(element)){
        dep++;
        getArrayMaxDepth(element, dep);  
      }
    });
    queue.push(dep);
  
  }
  getArrayMaxDepth(a, 0);
  console.log(Math.max.apply(null, queue));
  
  //解法二：
  function getArrayDepth(arr) {
    const depths = []
    arr.forEach( ele => {
      let depth = 0
      if (Array.isArray(ele)) {
        depth = getArrayDepth(ele)
      }
      depths.push(depth)
    })
    return 1 + Math.max.apply(null,depths)
  }
  console.log(getArrayDepth(a));
  ```

- 第四题：事件循环

  ```javascript
  //请写出输出内容
  async function async1() {
      console.log('async1 start');
      await async2();
      console.log('async1 end');
  }
  async function async2() {
  	console.log('async2');
  }
  
  console.log('script start');
  
  setTimeout(function() {
      console.log('setTimeout');
  }, 0)
  
  async1();
  
  new Promise(function(resolve) {
      console.log('promise1');
      resolve();
  }).then(function() {
      console.log('promise2');
  });
  console.log('script end');
  
  
  /*
  script start
  async1 start
  async2
  promise1
  script end
  async1 end
  promise2
  setTimeout
  */
  ```

  关于事件循环点击[这里](..\js经典实战题\从一道题浅说 JavaScript 的事件循环.md)
  
- 题型补充：

  ```javascript
  //顺序执行异步操作
  // 第一个任务
  function task1 (callback) {
      setTimeout(() => {
        console.log('1', '我是第一个任务，必须第一个执行');
        callback && callback(1);
      }, 3000);
    }
    
    // 第二个任务
    function task2 (callback) {
      setTimeout(() => {
        console.log('2', '我是第二个任务');
        callback && callback(2);
      }, 1000);
    }
    
    // 第三个任务
    function task3 (callback) {
      setTimeout(() => {
        console.log('3', '我是第三个任务');
        callback && callback(3);
      }, 1000);
    }
    
    // 所有任务
    function allTasks () {
      task1((cb1) => {
        if (cb1) {
          task2((cb2) => {
            if (cb2) {
              task3((cb3) => {
                if (cb3) {
                  // 顺序完成所有任务
                  console.log('asodh');
                }
              })
            }   
          });
        }
      });
    }
  
    allTasks();
  ```

  

- 知识补充：

  - 计算机网络
  - 小程序登录实现过程