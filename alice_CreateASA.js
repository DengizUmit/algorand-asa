const algosdk = require('algosdk');

const server="https://testnet-algorand.api.purestake.io/ps2";
const port="";
const token={
	"x-api-key": "JMG5aCNjq84rK3lPqTtLA6rRsfG3FVid75bfBE27"
};

var alice_mnemonic = "absurd reopen super limb wet space wrap artefact burden copy dignity movie owner cigar toss grace hint female ethics myth crouch valve alley above achieve";
var aliceAccount = algosdk.mnemonicToSecretKey(alice_mnemonic);

let client = new algosdk.Algodv2(token, server, port);

(async () => {
    let params = await client.getTransactionParams().do();
    let note = undefined; 
    let addr = aliceAccount.addr;
    let defaultFrozen = false;
    let decimals = 0;
    let totalIssuance = 1000000;
    let unitName = "OmitCoin";
    let assetName = "omg Coin";
    let assetURL = "https://www.linkedin.com/in/umit-dengiz/";
    let assetMetadataHash = "01234567890123456789012345678901";
    let manager = aliceAccount.addr;
    let reserve = aliceAccount.addr;
    let freeze = aliceAccount.addr;
    let clawback = aliceAccount.addr;
    let txn = algosdk.makeAssetCreateTxnWithSuggestedParams(addr, note,
         totalIssuance, decimals, defaultFrozen, manager, reserve, freeze,
        clawback, unitName, assetName, assetURL, assetMetadataHash, params);
    let rawSignedTxn = txn.signTxn(aliceAccount.sk);
    let tx = (await client.sendRawTransaction(rawSignedTxn).do());
    console.log("Transaction : " + tx.txId);
})().catch(e => {
    console.log(e);
});