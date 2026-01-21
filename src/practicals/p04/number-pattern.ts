// Write your code below
const size = Number(process.argv[2]);
if (isNaN(size) || size <= 0) {  
console.log("Please provide a positive number.");  
process.exit(1);}
for(let i = 1; i < size; i++)
    {let row = "";
for(let j = 1; j < i; j++){    
  row += j;  }
  console.log(row);}

//test