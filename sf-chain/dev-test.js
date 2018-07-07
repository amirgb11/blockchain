const Block = require("./block");

const block = new Block('foo' , 'bar' , 'f5d96k-df89' , 'baz');
console.log(block.toString()); 
console.log(Block.genesis().toString());