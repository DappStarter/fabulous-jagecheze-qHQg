require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remember equip guess climb sure slide'; 
let testAccounts = [
"0xafd93bed5934ef843d726d8cc3b7e2131acfbe2824a814a7a4f833093a53dc2a",
"0x5a03aa15e1f1201e85fceb092e53cf2cb2d64b4fd75f099a2bf80708c2bf87ad",
"0x3da19646ae7ff93218ff327766b2974b3bbfc06f11f4213e5a58bda522a5b2b7",
"0x3963c304ffe72d10a52b16c18850ae03a6c846f79b559aced174b833f2242e8f",
"0xe7548e56f24f2d8a4c2d11de03668733441fb45f40edbe057cc7907a94d8e272",
"0xda9fe58643a01b4909b61eeecaeefb4eff41b89a6e06c9fd6b2f8cdfd065c4ee",
"0xf3a3e35ce77d90de080fdc9aca3f021d88278c0059018074ce772f8e705da99e",
"0x5ab5a97116c6d84e8c07a305d6c70e75e267dfbdaffde6ebaef6c194a1e0c1e8",
"0xebf5ba1a3887b9d5bfc9d9087637083c1a2144b75bbcf50d13fd06fa94523143",
"0xc1fffc3717ef54992571a3a70ee46c0d1abd0442eaf39a734f554a77713e8be8"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

