const Block = require('./block');

describe('Block' , () => {
    let data, lastBlock, block;

    beforeEach(() =>{
         data = 'bar';
         lastBlock = Block.genesis();
         block = Block.mineBlock(lastBlock, data);
    })
    it('sets the `data` to match the inpute' , () => {
        expect(block.data).toEqual(data);
    });

    it('sets the `lastHash` to match the hash to the last block' , () => {
        expect(block.lastHash).toEqual(lastBlock.hash);
    });

});
