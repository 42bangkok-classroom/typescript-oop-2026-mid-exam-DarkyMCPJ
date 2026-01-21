const size = Number(process.argv[2]);
for(let i = 0; i < size; i++){
let row = "";
for(let j = 0; j < i; j++){ //jst change size to i
row += "*";
}console.log(row);}