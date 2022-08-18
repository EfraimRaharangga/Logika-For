var s = "";
var ee = 3;
var eee = ee + 1;

for (var i = 0; i < eee; i++) {
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
