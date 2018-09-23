const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');
const provider = new HDWalletProvider (
'produce domain cupboard job brass okay rhythm miracle pudding below oxygen grunt',
'https://rinkeby.infura.io/v3/2a02d49676c8440596bc1ae36800fda9'
);
const web3 = new Web3(provider);
const deploy = async () => {
const accounts = await web3.eth.getAccounts();
console.log('attempting to deploy', accounts[0]);
const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
     .deploy({ data: '0x' + compiledFactory.bytecode })
     .send({from: accounts[0], gas: '2900000'});

console.log('contract deployed to', result.options.address);

};
deploy();
