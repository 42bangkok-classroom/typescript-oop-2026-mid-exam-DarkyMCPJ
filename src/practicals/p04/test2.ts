const size = Number(process.argv[2]);
for(let i = 0; i < size; i++){
let row = "";
for(let s = 0; s < size -i -1; s++){
row += " ";
}
for(let j = 0; j < size; j++){
row += "*";
}console.log(row);}