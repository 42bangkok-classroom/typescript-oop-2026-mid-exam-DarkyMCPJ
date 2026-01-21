// Write your code below
const score = Number(process.argv[2]);
if (isNaN(score))  
    console.log("Invalid input");
else if(score >= 80 && score <= 100)  
console.log("Grade is A");
else if(score < 80 && score >= 70)  
console.log("Grade is B");
else if(score < 70 && score >= 60)  
console.log("Grade is C");
else if(score < 60 && score >= 50)  
console.log("Grade is D");
else if(score < 50 && score >= 0)  
console.log("Grade is F");
else  console.log("Invalid input");

//test