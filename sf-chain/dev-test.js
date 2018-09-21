const Block = require("./block");
const SHA256 = require ('crypto-js/sha256');

const fooBlock = Block.mineBlock(Block.genesis() , "foo");
console.log(fooBlock.toString());
