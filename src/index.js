module.exports = function towelSort (matrix) {
  if(!matrix) {
    return [];
  }

  let resArr = [];
  
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 == 0) {
            for (let j = 0; j < matrix[i].length; j++) {
                resArr.push(matrix[i][j]);
            }
            continue;
        }
        for (let j = matrix[i].length - 1; j >= 0; j--) {
            resArr.push(matrix[i][j]);
        }
    }
    return resArr;
}
