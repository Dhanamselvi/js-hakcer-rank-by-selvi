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


// Staircase (some Doubts is there)

function stairCase(n){
  if(typeof n === "number" && n === parseInt(n,0)){
    for(let r = 1; r <= n; r++){
      let blanks = [ ...[], ...Array(n-r) ].map(i => '@');
      let hashes = [ ...[], ...Array(n - (n-r))].map(i => '#');
      console.log([ ...blanks, 
                    ...hashes 
                  ].join(''));
    }
  }
}
console.log(stairCase(3));


// MinMax Sum Values

// function minimumMaximum(arr){
//   var maxi = Math.max(...arr);     // In ES5 it will be  /* Math.max.apply(Math,arr)*/  ===> Maxi = 5
//   var mini = Math.min(...arr);     // In ES5 it will be  /* Math.min.apply(Math,arr)*/  ===> Mini = 1

//   var maxiFilter = arr.filter(function(currentArray){
//     return currentArray > mini;         // [2,3,4,5]
//   });

//   var miniFilter = arr.filter(function(currentArray){
//     return currentArray < maxi;       // [1,2,3,4]
//   });

//   var MaxSum = 0;                   //  14
//   var MinSum = 0;                  //   10

//   for(let i = 0; i < maxiFilter.length; i++){
//     MaxSum += maxiFilter[i];    
//   };

//   for(let i = 0; i < miniFilter.length; i++){
//     MinSum += miniFilter[i];    
//   }

//   return MaxSum + " " + " " + MinSum;
// }
// console.log(minimumMaximum([1,2,3,4,5]));


// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {

    let  maxiHeight = Math.max(...ar);
    let addToalCandels = [];

    for(let i = 0; i<ar.length; i++){
      if(ar[i] === maxiHeight){
        addToalCandels.push(ar[i]);
      }
    }
    return addToalCandels;
}
console.log(birthdayCakeCandles([1,6,6,2,3,6,4]));

// Grading Students
  // First Method

// function gradingStudents(grades){
//   let gradesSystem = [];
//   for(let i = 0; i<grades.length; i++){
//     if(grades[i] > 37 && (5 - (grades[i]%5) < 3)){
//       gradesSystem[i] = grades[i] + (5 - (grades[i]%5));
//     }else{
//       gradesSystem[i] = grades[i]
//     }
//   }
//   return gradesSystem;
// }
// console.log(gradingStudents([34,76,45,68,54]));

// Second Method

function gradingStudents(grades) {
    // Write your code here
    let roundedGrades = [];
    for (let i = 0; i < grades.length; i++) {
        let difference = multipleOfFive(grades[i]);
        let finalGrade = difference + grades[i];
        
        if ((difference < 3) && (finalGrade >= 40)) {
            roundedGrades.push(finalGrade);
        } else {
            roundedGrades.push(grades[i]);
        }
    }
    return roundedGrades;
}
function multipleOfFive(x) {
    let counter = 0;
    while (x % 5 != 0) {
        x++;
        counter++;
    }
    return counter;
}

