/**
 * LeetCode 14
 * 
 * https://leetcode-cn.com/problems/longest-common-prefix/
 */

const arr = ["flower", "flow", "flight"];
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

  if (strs.length === 1) {
    return strs.shift();
  }

  if(strs.length === 0){
    return '';
  }

  strs.sort((a, b) => a.length - b.length);

  let queue = [];
  queue.push(strs[0]);

  while (queue.length > 0) {
    let temp = queue.shift();
    //若temp 为undefined则返回空
    if (!temp) break;
    for (let i = 1; i < strs.length; i++) {
      let index = strs[i].search(new RegExp(temp, 'g'))
      //如果该项字符没有匹配，或者匹配字符不是前缀，则跳出for循环
      if (index === -1 || index !== 0) {
        break;
      }
      //如果全部匹配，则返回当前字符串
      if (i === strs.length - 1) return temp;
    }

    //由于是前缀匹配，所以不需要考虑从前面去除
    // let headstr = temp.split('');
    // if (headstr.length > 1) {
    //   headstr.shift();
    //   headstr = headstr.join('');
    //   queue.push(headstr);
    // }

    //减掉temp的最后一个字符，放入queue继续比较
    if (temp.length > 1) {
      let tailstr = temp.slice(0,temp.length-1);
      queue.push(tailstr);
    }

  }

  return '';
};

console.log(longestCommonPrefix(arr));