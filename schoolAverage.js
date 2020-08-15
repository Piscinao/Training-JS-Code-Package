// School average
// average from array


const array = [70, 70, 80];

console.log(studentAverage(array));

function studentAverage(grades) {
  const average = averageCalc(grades);


  if (average < 59) return 'F';
  if (average < 69) return 'D';
  if (average < 79) return 'C';
  if (average < 89) return 'B';
  return 'A';

}


function averageCalc(array) {
  let add = 0;
  for (let value of array) {
    add += value;
  }
  return add / (array.length);


}

