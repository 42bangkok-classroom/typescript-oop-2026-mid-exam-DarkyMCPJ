const size = Number(process.argv[2]);
if (isNaN(size) || size <= 0) {
}

for (let i = 1; i <= size; i++) {
  let row = "";

  for (let s = 0; s < size - i; s++) {
    row += " ";
  }

  for (let j = i; j >= 1; j--) {
    row += j;
  }

  console.log(row);
}


