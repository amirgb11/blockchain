const Block = require('./block');

class Blockchain {
  constructor() {
    this.chain = [Block.genesis()];
  }

  addBlock(data) {
    const block = Block.mineBlock(this.chain[this.chain.length-1], data);
    this.chain.push(block);
    return block;
  }

  isValidChain(chain){
    if(JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis()))
      return false ; // chain is not valid
    for (let i = 0; i < cahin.length; i++) {
      const block = cahin[i];
      const lastBlock = chain[i-1];

      if (block.lastHash !== lastblock.hash || block.hash !== Block.blockHash(block)) {  
        return false ;
      }
    }
    return true;
  }
}

module.exports = Blockchain;
