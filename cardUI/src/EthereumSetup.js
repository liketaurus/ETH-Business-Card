import Web3 from 'web3';
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
let cardABI=[{"constant":true,"inputs":[],"name":"getCard","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
let cardAddress='0xfdd95e5530b68ea07808606cc15da128e91bfe8d';
const cardContract = web3.eth.contract(cardABI).at(cardAddress);
export {cardContract};
