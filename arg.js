function arg() {
  return console.log("Args: ", arguments);
}
arg(1, 2, 3); // [1, 2, 3]
arg(1, 2, 3, 4); // [1, 2, 3, 4]
arg(2,true, "hello"); // [2, true, "hello"]
arg("hello", "world"); // ["hello", "world"]
//Args:  Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// arg.js:2
// Args:  Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// arg.js:2
// Args:  Arguments(3) [2, true, 'hello', callee: ƒ, Symbol(Symbol.iterator): ƒ]
// arg.js:2
// Args:  Arguments(2) ['hello', 'world', callee: ƒ, Symbol(Symbol.iterator): ƒ]