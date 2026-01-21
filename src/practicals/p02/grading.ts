// Write your code below
const score = Number(process.argv[2]);
if (isNaN(score))  console.log("Invalid");
else if(score >= 80 && score <= 100)  
console.log("A");
else if(score < 80 && score >= 70)  
console.log("B");
else if(score < 70 && score >= 60)  
console.log("C");
else if(score < 60 && score >= 50)  
console.log("D");
else if(score < 50 && score >= 0)  
console.log("F");
else  console.log("Invalid input");

//test