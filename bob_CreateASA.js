const algosdk = require('algosdk');

const server="https://testnet-algorand.api.purestake.io/ps2";
const port="";
const token={
	"x-api-key": "JMG5aCNjq84rK3lPqTtLA6rRsfG3FVid75bfBE27"
};

var bob_mnemonic = "nerve zoo limit away angry unaware keen humble regret pipe reflect exact sibling sphere false purpose tank home glory trigger boat inch brand about demise";
var bobAccount = algosdk.mnemonicToSecretKey(bob_mnemonic);

let client = new algosdk.Algodv2(token, server, port);

(async () => {
    let params = await client.getTransactionParams().do();
    let note = undefined; 
    let addr = bobAccount.addr;
    let defaultFrozen = false;
    let decimals = 0;
    let totalIssuance = 3000000;
    let unitName = "XCoin";
    let assetName = "x Coin";
    let assetURL = "https://github.com/DengizUmit";
    let assetMetadataHash = "01234567890123456789012345678999";
    let manager = bobAccount.addr;
    let reserve = bobAccount.addr;
    let freeze = bobAccount.addr;
    let clawback = bobAccount.addr;
    let txn = algosdk.makeAssetCreateTxnWithSuggestedParams(addr, note,
         totalIssuance, decimals, defaultFrozen, manager, reserve, freeze,
        clawback, unitName, assetName, assetURL, assetMetadataHash, params);
    let rawSignedTxn = txn.signTxn(bobAccount.sk);
    let tx = (await client.sendRawTransaction(rawSignedTxn).do());
    console.log("Transaction : " + tx.txId);
})().catch(e => {
    console.log(e);
});