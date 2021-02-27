"use strict";

const myAverageScore = function (numbers) {
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    const score = total / numbers.length;
    if (score <= 100 && score >= 91) {
      return console.log("My average score: A");
    }
    if (score <= 90 && score >= 81) {
      return console.log("My average score: B");
    }
    if (score <= 80 && score >= 71) {
      return console.log("My average score: C");
    }
    if (score <= 70) {
      return console.log("My average score: D");
    }
  };
  
  console.log(myAverageScore([100, 75, 81, 96]));
  console.log(myAverageScore([45, 63, 85, 70]));
  console.log(myAverageScore([77, 82, 60, 58]));
  console.log(myAverageScore([93, 99, 93, 96]));
