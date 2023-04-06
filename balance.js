const algosdk = require("algosdk");

checkBalance=() => {
    const port ="";
    const token = {
        "x-api-key": process.env.API
    };

    const TestServer = "https://testnet-algorand.api.purestake.io/ps2";

    let client = new algosdk.Algodv2(token, TestServer, port);
    let account = "B6MGFESMIK4YZ7MHQNFX36XHDWEBI5IU3DSGULWPG5WMT5XSRT5FFJTNPY";

    (
        async () => {
            let account_info = (await client.accountInformation(account).do());
            console.log("Balance of Account: " + account + ": " + JSON.stringify(account_info.amount));
        }
    )().catch((err) =>{
        console.log("Error: ", err);
    })
}

module.exports = checkBalance