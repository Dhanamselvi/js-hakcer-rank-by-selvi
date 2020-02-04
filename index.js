// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Diagonal Difference
/******
 * Primary Diagonal = (i == j) (i.e., [0 0])
 * Secondary Diagonal = (i + j === parameter.length - 1)
          ( i.e., [0 2] (0 + 2 === 3-1))
 */
function DiagonalDifference(matrix){
  let primaryDiagonal = 0;
  let SecondaryDiagonal = 0;
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix.length; j++){
      if(i === j){
        primaryDiagonal += matrix[i][j];
      }
      if(i + j === matrix.length - 1){
        SecondaryDiagonal += matrix[i][j];
      }
    }
  }
  return Math.abs(primaryDiagonal - SecondaryDiagonal);
}
console.log(DiagonalDifference([[11,2,4],[4,5,6],[10,8,-12]]));

//Complete the plusMinus function below (first Method).
function plusMinus(arr) {
  var plus = 0;
  var minus = 0;
  var zero = 0;

  for(var i =0; i<arr.length; i++){
      if(arr[i] > 0){
          plus++;
      }else if(arr[i] < 0){
          minus++;
      }
      else{
          zero++;
      }
  }
console.log(plus/arr.length);
console.log(minus/arr.length);
console.log(zero/arr.length);
}
console.log(plusMinus([1,-2,3,-5,0,0]));

//Complete the plusMinus function below (Second Method).

function PositiveNegative(arr) {
    var plus = 0;
    var minus = 0;
    var zero = 0;
if(arr.length > 0 && arr.length <= 100){
    arr.map(function(elem,key){
        if(elem > 0){
            plus++;
        }
        else if(elem < 0){
            minus++;
        } 
        else{
            zero++;
        }
    })
};
console.log(plus/arr.length);
console.log(minus/arr.length);
console.log(zero/arr.length);
}
console.log(PositiveNegative([1,-2,3,4,5,-6,7,8,0,0]));