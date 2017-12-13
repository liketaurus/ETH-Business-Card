pragma solidity ^0.4.13;
contract Card {
  string contactString;

  function Card() public{
    contactString='{"name":"John Doe","desc":"IT Trainer/Coach","email":"john@doe.com","www":"www.doe.com"}';
  }

  function getCard() public constant returns (string){
    return contactString;
  }
}
