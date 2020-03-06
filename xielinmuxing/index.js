var start = new Date().getTime();
const red = '1';
const blue = '0';
const black = '-1';
const people = 1400;
const otherPeople = 1400;
const empty = 800;
//矩阵的邻居们
const statisMatrix = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 0],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1]
];
const T = 8; //相同个数

var colorNum = {
  '1': 0,
  '0': 0,
  '-1': 0
};
var getColor = {
  '1': [255, 0, 0, 255],
  '0': [0, 0, 255, 255],
  '-1': [0, 0, 0, 255]
};
var matrix = [],
  matrixNum = 60;
/**
 * 初始化种族颜色数目
 */
var initNum = function() {
  colorNum.red = people;
  colorNum.blue = otherPeople;
  colorNum.black = empty;
};
/**
 * @returns 返回随机颜色
 */
var randomColor = function() {
  var random = Math.random() * 10;
  if (random >= 3.33 && random <= 6.67) {
    if (colorNum.red === 0) {
      randomColor();
      return;
    }
    colorNum[red]--;
    return red;
  }
  if (random < 3.33) {
    if (colorNum.blue === 0) {
      randomColor();
      return;
    }
    colorNum[blue]--;
    return blue;
  }
  if (random > 6.67) {
    if (colorNum.black === 0) {
      randomColor();
      return;
    }
    colorNum[black]--;
    return black;
  }
};
/**
 * 如果存在不满意的将其加入到相应数组中
 * @param {*} color 种族
 * @param {*} i 矩阵的行
 * @param {*} j 矩阵的列
 */
function addArr(color, i, j) {
  if (color === red) notPeo.push([i, j]);
  if (color === blue) notOther.push([i, j]);
  if (color === black) empArr.push([i, j]);
}
/**
 * 测试周围相同种族数目是否满意
 * @param {*} matrix 输入其中的矩阵
 */
function statis(matrix) {
  var total = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      var sum = 0;
      for (let k = 0; k < statisMatrix.length; k++) {
        var left = statisMatrix[k][0];
        var right = statisMatrix[k][1];
        if (
          i + left < 0 ||
          i + left > matrix.length - 1 ||
          j + right < 0 ||
          j + right > matrix.length - 1
        )
          continue;
        if (
          matrix[i + statisMatrix[k][0]][j + statisMatrix[k][1]] ===
          matrix[i][j]
        )
          sum++;
      }
      if (sum < T) {
        addArr(matrix[i][j], i, j);
        colorNum[matrix[i][j]]++;
        total++;
      }
    }
  }
  return total > 0;
}
var notPeo = [];
var notOther = [];
var empArr = [];
initNum();
//初始化矩阵
for (var i = 0; i < matrixNum; i++) {
  var temArr = [];
  for (var j = 0; j < matrixNum; j++) {
    var temColor = randomColor();
    // addArr(temColor, i, j);
    temArr.push(temColor);
  }
  matrix.push(temArr);
}
var outNum = 0;
//循环直到没有不满意的点
while (statis(matrix)) {
  outNum++;
  sumArr = notPeo.concat(notOther).concat(empArr);
  for (var i = 0; i < sumArr.length; i++) {
    var temColor = randomColor();
    matrix[sumArr[i][0]][sumArr[i][1]] = temColor;
  }
  notPeo = [];
  notOther = [];
  empArr = [];
  if (outNum > 100) break;
}
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var imageData = ctx.createImageData(60, 60);
//画canvas部分
for (var i = 0; i < imageData['data'].length; i += 4) {
  var x = parseInt(i / (4 * matrix.length));
  var y = i / 4 - x * matrix.length;
  var colorBinary = getColor[matrix[x][y]];
  for (var j = 0; j < 4; j++) {
    imageData['data'][i + j] = colorBinary[j];
  }
}
ctx.putImageData(imageData, 0, 0);
var end = new Date().getTime();
console.log(end - start);
