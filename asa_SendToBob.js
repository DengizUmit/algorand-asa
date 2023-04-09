const algosdk = require('algosdk');

const server="https://testnet-algorand.api.purestake.io/ps2";
const port="";
const token={
	"x-api-key": "JMG5aCNjq84rK3lPqTtLA6rRsfG3FVid75bfBE27"
};

var alice_mnemonic = "absurd reopen super limb wet space wrap artefact burden copy dignity movie owner cigar toss grace hint female ethics myth crouch valve alley above achieve";
var aliceAccount = algosdk.mnemonicToSecretKey(alice_mnemonic);
var bobAddress = 'B6MGFESMIK4YZ7MHQNFX36XHDWEBI5IU3DSGULWPG5WMT5XSRT5FFJTNPY';

let client = new algosdk.Algodv2(token, server, port);

(async () => {
    let assetID = 177577169;
    let params = await client.getTransactionParams().do();
    let sender = aliceAccount.addr;
    let recipient = bobAddress;
    let revocationTarget = undefined;
    let closeRemainderTo = undefined;
    let note = undefined;
    let amount = 200000;
    let txn = algosdk.makeAssetTransferTxnWithSuggestedParams(sender, recipient, closeRemainderTo, revocationTarget,
        amount, note, assetID, params);
    let rawSignedTxn = txn.signTxn(aliceAccount.sk)
    let tx = (await client.sendRawTransaction(rawSignedTxn).do());
    console.log("Transaction : " + tx.txId);
})().catch(e => {
    console.log(e);
});