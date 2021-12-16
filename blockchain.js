const Block = require("./block");

class Blockchain{

    constructor(){
        this.chain = [Block.genesis()];
    }
    // Block.mineBlock(Block.genesisi(),"test");

    addBlock(data){ // block erzeugen und an chain anhängen
        const block = Block.mineBlock(this.chain[this.chain.lenght-1],data);
        this.chain.push(block);// block an die Kette anhängen
        return block; //monitoring
    }




}

module.exports = Blockchain;