var s = "";
var ee = 5;

for (var i = 0; i < ee; i++) {
  for (var k = 0; k < i; k++) {
    s += " ";
  }
  for (var j = ee; j > i; j--) {
    s += "*";
  }
  s += "\n";
}
console.log(s);
