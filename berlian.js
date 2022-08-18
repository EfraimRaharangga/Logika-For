var s = "";
var ee = 20;

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
for (var i = 0; i <= ee; i++) {
  for (var k = 0; k < i; k++) {
    s += " ";
  }
  for (var j = ee; j > i; j--) {
    s += "*";
  }
  for (var j = ee; j >= i; j--) {
    s += "*";
  }
  s += "\n";
}

console.log(s);
