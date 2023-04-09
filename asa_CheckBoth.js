const algosdk=require('algosdk');

const server="https://testnet-algorand.api.purestake.io/ps2";
const port="";
const token={
	"x-api-key": "JMG5aCNjq84rK3lPqTtLA6rRsfG3FVid75bfBE27"
};

var aliceAddress = 'PXVRGUI43NBGLAY6TEOMAK3ZFZKGRU5W47BSM6BKIGA6HBC3P6MLUPUIPA';
//alice mnemonic:""
var bobAddress = 'B6MGFESMIK4YZ7MHQNFX36XHDWEBI5IU3DSGULWPG5WMT5XSRT5FFJTNPY';
//bob mnemonic=""

let client = new algosdk.Algodv2(token, server, port);

(async() => {
    let alice_account_info = (await client.accountInformation(aliceAddress).do());
    console.log("Asset of Alice: ");
    console.log(alice_account_info.assets);

    let bob_account_info = (await client.accountInformation(bobAddress).do());
    console.log("Asset of Bob: ");
    console.log(bob_account_info.assets);
})().catch(e => {
	console.log(e);
})