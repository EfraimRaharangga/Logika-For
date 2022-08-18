var s = "";
var ee = 5;

for (var i = 0; i < ee; i++) {
  for (var k = ee; k > i; k--) {
    s += " ";
  }
  for (var j = 0; j < i; j++) {
    s += "*";
  }
  for (var j = 0; j <= i; j++) {
    s += "*";
  }

  s += "\n";
}

console.log(s);
