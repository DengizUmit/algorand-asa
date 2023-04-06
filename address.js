const algosdk = require('algosdk');

// Create Address Manager
createAdress=() => {
    let account = algosdk.generateAccount();
    console.log("Account Address: ", account);

    let mn = algosdk.secretKeyToMnemonic(account.sk);
    console.log("Account Mnemonic: ", mn);
}

module.exports = createAdress

// address 1 : PXVRGUI43NBGLAY6TEOMAK3ZFZKGRU5W47BSM6BKIGA6HBC3P6MLUPUIPA
// address mn : absurd reopen super limb wet space wrap artefact burden copy dignity movie owner cigar toss grace hint female ethics myth crouch valve alley above achieve

// address 2 : B6MGFESMIK4YZ7MHQNFX36XHDWEBI5IU3DSGULWPG5WMT5XSRT5FFJTNPY
// address mn : nerve zoo limit away angry unaware keen humble regret pipe reflect exact sibling sphere false purpose tank home glory trigger boat inch brand about demise