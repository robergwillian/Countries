let row = [25, 25, 50, 50, 100];

var twentyFive = 0;
var fifty = 0;
var controller = 0;

for (let i = 0; i < row.length; i++) {
  if (row[i] === 25) {
    twentyFive = twentyFive + 25;
    controller++;
  }

  if (row[i] === 50) {
    if (twentyFive >= 25) {
      twentyFive = twentyFive - 25;
      fifty = fifty + 50;
      controller++;
    } else {
      break;
    }
  }

  if (row[i] === 100) {
    if (twentyFive >= 25 && fifty >= 50) {
      twentyFive = twentyFive - 25;
      fifty = fifty - 50;
      controller++;
    } else {
      break;
    }
  }
}

if (controller < row.length) {
  console.log("tickets (" + row.join(",") + ") => NO");
} else {
  console.log("tickets (" + row.join(",") + ") => YES");
}
