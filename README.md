# ETH-Business-Card
A simple business card smart contract example (impressed by [Ethereum Development Course - Blockchain at Berkeley](https://www.udemy.com/ethereum-development-course-blockchain-at-berkeley/))

## Setup Steps
* download and install [Node.js](https://nodejs.org/en/)
* `npm update`
* `npm install -g truffle`
* `npm install -g ganache-cli`
* download and install [Git for Windows](https://git-for-windows.github.io/) (optional - to use Git Bash)

## Creating the project structure
* `mkdir cardApp`
* `cd cardApp`
* `mkdir card`
* `cd card`
* `truffle init`
* copy files from this repo to corresponding subfolders of a **card** folder

## Test the contract
* `ganache-cli` (cmd window)
* `truffle compile` (now you need to switch to Git Bash)
* `truffle migrate` 
* `truffle console`
* `Card.address`
* `var card = Card.at(Card.address)`
* `card`
* `card.getCard();`

## Creating web frontend (React)
* `npm install -g create-react-app`
* `create-react app cardUI`
* replace **config.json** with a file from this repo
* `cd cardUI`
* `npm install`
* `npm start` (you will see an app page in a browser at *localhost:3000*)
* copy files from this repo to corresponding subfolders of a **cardUI** folder
* for updating **EthereumSetup.js** file you'll need a *contract address* (copy output of `card.address` comand from truffle console) and *ABI* (copy output from `JSON.stringify(card.abi)` from truffle console)
* save project - page in a browser will refreshed. At this point you must see some contact information on that page
* if you want to use plain 'vanilla' JavaScript, navigate to *localhost:3000/test.html* (youll need to copy contract address and ABI from **EthereumSetup.js** to this file to get it to work)

## That's all!

