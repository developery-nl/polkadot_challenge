const blocknumber=process.argv[2];

const { ApiPromise, WsProvider } = require('@polkadot/api');
const wsProvider = new WsProvider('wss://rpc.polkadot.io');
async function getblock()
{
    const api = await ApiPromise.create({ provider: wsProvider });

    // Retrieve the chain & node information information via rpc calls
    const [chain, nodeName, nodeVersion] = await Promise.all([
        api.rpc.system.chain(),
        api.rpc.system.name(),
        api.rpc.system.version()
      ]);

    await api.isReady;
    console.log("-----------------------");
    console.log("Chain: " +chain);
    console.log("Node connect: " +nodeName);
    console.log("Chain genesis hash: " +api.genesisHash.toHex());
    console.log("")
    if (blocknumber)
        {
            console.log("Details for blocknumber "+blocknumber+":");
            const blockHash = await api.rpc.chain.getBlockHash(blocknumber);
            const theBlock = await api.rpc.chain.getBlock(blockHash);
            console.log("Block data: ");
            console.log(theBlock.toHuman());

        }
    else  
        { 
            const bnr = await api.rpc.chain.getHeader();
            console.log("Details for blocknumber "+bnr.number+":");
            const bhash = await api.rpc.chain.getBlockHash();
            console.log("hash from latest block: "+bhash.toHex())
            const theBlock = await api.rpc.chain.getBlock(bhash);
            console.log("Block data: ");
            console.log(theBlock.toHuman());
        }
}
//run the async call
getblock().catch(err=>{console.log(err)}).then(()=>{
process.exit(0);
})
