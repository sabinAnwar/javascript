var text = "";
var y = 0;
var i=y%2;
// Hier Text mit geraden Zahlen aufbauen
while (y <= 100) {
  if (i === 0) {
    text += y + ",";
    console.log(text);
  }
  y++;
}
console.log(text);
