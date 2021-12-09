require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drink fortune strategy guard render remember pupil install inflict sudden senior'; 
let testAccounts = [
"0xbc006450c81855f24ed718d6d6140df968747a1213c7f0fbac8878d3f901689e",
"0x65ae8664fde036a6c52bb74b6949ed45cbed9e78f695c30da45977f4d868ae63",
"0x4659d331bc73bd1c63ec6e2e82539142d7f80ea45edcbeafe237867ab1fc8016",
"0xc198917118a9b3671fdf5393abdb65c1516fdbe4680bb10b234996b697947706",
"0x57e67d2daf5a2f7d954545ad60b4ef3ee6f90360f8d843e881f5374433ef6472",
"0xdebb7896127d8cd50b47bc9194c460102cfcbf4220fa07ff0cbe4178f42e114a",
"0xe2a3657539e0d8c8018bb37a1d8d03215e83f521e8003dc6210f0c8aec609101",
"0x1527c7dffbbee8cfffa52271a97c2a58ddf62c2fb57a6270d8c4d818743f494c",
"0x7171257af5fef35ed7931fe8f3c248247d46caef757a63b9e35b8a7e00973de3",
"0x7aa169a052d11c6aacf69a816707c45ee0f5c2a32040704d21fc55bbac612e19"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


