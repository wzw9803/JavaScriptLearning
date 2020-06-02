//第一题
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

//第二题
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

//第三题
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

//---------------------------------------------------

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