/**
 * https://leetcode-cn.com/problems/rotate-matrix-lcci/submissions/
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const len = matrix.length;

  //水平翻转
  for (let i = 0; i < Math.floor(len / 2); i++) {
    for (let j = 0; j < len; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][len-1 - i];
      matrix[i][len-1 - i] = temp;

      //上面的相当于下面这句,经测验解构赋值速度较慢
      // [matrix[i][j], matrix[len-1 - i][j]] = [matrix[len-1 - i][j], matrix[i][j]];
    }
  }

  //主对角线翻转
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;

      //上面的相当于下面这句,经测验解构赋值速度较慢
      // [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
}

//解法二
let rotate = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[i].length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }
  matrix.forEach(row => row.reverse())
};