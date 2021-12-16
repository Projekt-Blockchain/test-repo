const Block = require("./block");
const Blockchain = require("./blockchain");

//const block = new Block("time","hash1","hash2","data");
//console.log(block.toString());

//console.log(Block.genesis().toString());

//const testBlock = Block.mineBlock(Block.genesis(),"test");
//console.log(testBlock.toString());

const blockchain = new Blockchain();
console.log(blockchain);

blockchain.addBlock("100 € an boo 50 $ von foo");
console.log(blockchain);

blockchain.addBlock("80,50 € von boo an baz");
console.log(blockchain);

blockchain.addBlock("10 € von boo an turner");
console.log(blockchain);



