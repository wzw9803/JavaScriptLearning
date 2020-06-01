/**
 * LeetCode 200题
 * 
 * 岛屿数量:
 * 
 * (题目描述：)
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。
 * 此外，你可以假设该网格的四条边均被水包围.
 */


const arr = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0']
];

//BFS - 广度优先搜索
//DFS - 深度优先搜索


/**
 * BFS - 广度优先搜索
 * 
 * 解题思路：
 * 
 *    遍历数组，如果当前项值为1，islandsNum 加一，并将当前项下标放入队列中，
 *    然后进入 while 循环中（循环中断条件：queue.size < 1），
 *    从队列中取出下标，将该下标的值置为 0 ，
 *    按照顺序对四个方位（上下左右）分别进行判断，如果下标不越界，并且值不为 0 ，则将该项下标送入队列
 *    判断条件为：
 *    (1)当前项下标是否越界（小于0 或 大于等于数组长度）
 *    (2)当前项值，是否为 0
 * 
 * 
 * @param {character[][]} grid
 * @return {number}
 */
var numIslandsBFS = function (grid) {

  if (grid.length < 1) return 0;

  let islandsNum = 0;
  let queue = [];

  function bfs(rowB, colB){
    if(rowB < 0 || colB < 0 
      || rowB >= grid.length || colB >= grid[0].length 
      || grid[rowB][colB] === '0'){

        return;
      }

      grid[rowB][colB] = '0'; //在进队列的时候将其标记为 0 ，防止重复加入队列
      queue.push([rowB, colB]);
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const element = grid[row][col];

      if(element === '1'){
        islandsNum++;

        grid[row][col] = '0';
        queue.push([row, col]);

        while(queue.length > 0){
          let temp = queue.shift();
          let rowT = temp[0];
          let colT = temp[1];

          bfs(rowT - 1, colT);  //上
          bfs(rowT + 1, colT);  //下
          bfs(rowT, colT - 1);  //左
          bfs(rowT, colT + 1);  //右
        }
      }
    }
  }

  return islandsNum;
};

console.log(numIslandsBFS(arr));

//--------------------------------------------------------------------------------

/**
 * DFS - 深度优先搜索
 * 
 * 解题思路：
 * 
 *    遍历数组，如果当前项值为1，islandsNum 加一，并将当前项“沉没”（将值置为0），
 *    然后按照顺序对四个方位（上下左右）进行递归调用，进行深度优先搜索，
 *    递归结束条件为：
 *    (1)当前项下标是否越界（小于0 或 大于等于数组长度）
 *    (2)当前项值，是否为 0
 * 
 * 
 * @param {character[][]} grid
 * @return {number}
 */
var numIslandsDFS = function (grid) {

  if (grid.length < 1) return 0;

  let islandsNum = 0;

  function dfs(rowD, colD) {
    if (rowD < 0 || colD < 0 ||
      rowD >= grid.length || colD >= grid[0].length ||
      grid[rowD][colD] === '0') {

      return;
    }

    grid[rowD][colD] = '0';

    dfs(rowD - 1, colD); //上
    dfs(rowD + 1, colD); //下
    dfs(rowD, colD - 1); //左
    dfs(rowD, colD + 1); //右

  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const element = grid[row][col];
      if (element === '1') {
        islandsNum++;
        dfs(row, col);
      }
    }
  }

  return islandsNum;
};

//网上解法 
var numIslandsDFS1 = function (grid) {
  /**
   * 深度优先
   */
  // 曾想只需要执行下面和前面一个即可，实际还是需要执行4个方位
  const dy = [0, 0, -1, 1];
  const dx = [-1, 1, 0, 0];

  let g = [...grid];

  let result = 0;

  const sink = (i, j) => {
    // if (g[i][j] == 0) return 0;
    g[i][j] = "0";

    // y 轴改变的是i , x 轴改变的是 x
    for (let k = 0; k < dx.length; k++) {
      // 分别设置找到原点的上下左右四个点。
      let y = i + dy[k],
        x = j + dx[k];
      // 在边界内
      if (y >= 0 && y < g.length && x >= 0 && x < g[i].length) {
        // 如果是 "0" 跳过
        if (g[y][x] == '0') continue;
        sink(y, x)
      }
    }
    // 外面只收集一次返回的值即可
    return 1;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 0) continue;
      result += sink(i, j);
    }
  }
  return result;
};

console.log(numIslandsBFS(arr));