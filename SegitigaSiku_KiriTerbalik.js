var s = "";
var ee = 5;

for (var i = ee; i > 0; i--) {
  for (var j = 0; j < i; j++) {
    s += "*";
  }
  s += "\n";
}

console.log(s);
