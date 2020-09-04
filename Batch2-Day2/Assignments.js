let Assignment = prompt("Which assignment would you like to see?");
switch (Assignment) {
  // Program to serch for a particular char in string
  case "First":
    let x;
    let p = 0;
    x = prompt(
      "Program to serch for a particular char in string: enter a string"
    );
    let y;
    y = prompt("enetr a char");

    for (var i = 0; i < x.length; i++) {
      if (y == x[i]) {
        p = p + 1;
        console.log("position is at" + i + "");
      }
    }
    if (p == 0) console.log("NOT FOUND");
    break;
  // Program to covert minutes into seconds:
  case "Second":
    let m = prompt(
      "Program to covert minutes into seconds: Enter the no of minutes"
    );
    console.log("no of seconds are" + m * 60);
    break;
  // Program to search for a element in string
  case "Third":
    let s = prompt("Program to search for a element in string: enter size");
    let a = new Array();
    for (var i = 0; i < a; i++) {
      a[i] = prompt("enter the string");
    }
    let ele = prompt("enter the ele to be searched");

    var k = a.indexOf();
    if (k == -1) console.log(" not found ");
    else console.log(" found at" + k);
    break;
  // Program to display only elements containing a in them from a array
  case "Fourth":
    let h = prompt(
      "Program to display only elements containing a in them from a array : enter size of array"
    );
    let g = new Array();
    for (var i = 0; i < h; i++) {
      g[i] = prompt("enter the string");
    }
    for (i = 0; i < h; i++) {
      for (var j = 0; j < g[i].length; j++) {
        if (g[i][j] == "a") {
          console.log(g[i]);
          break;
        }
      }
    }
    break;
  // Program an array in reverse order
  case "Fifth":
    let z = prompt("Program an array in reverse order: enter size");
    let v = new Array();
    for (var i = 0; i < z; i++) {
      v[i] = prompt("enter letter of element:sequencewise");
    }
    let w = new Array();
    w = v.reverse();
    for (i = 0; i < z; i++) {
      console.log(w[i]);
    }

    break;
  default:
    console.log(
      "Please provide input as First or Second or Third or Fourth or Fifth"
    );
    break;
}
