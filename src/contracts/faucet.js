export const FaucetAddress = '0xFF745AE641F174Ba25e3cD8446F509989D5B0518'
export const FaucetAbi = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenAddress_",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "name_",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Bought",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "Deployed",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "allowance",
      "outputs": [],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "balanceOf",
      "outputs": [],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "sendToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [],
      "stateMutability": "view",
      "type": "function"
    }
  ]