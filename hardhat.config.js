/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require('dotenv').config(); //all the key value pairs are being made available due to this lib
 require("@nomicfoundation/hardhat-toolbox");
  
 const {API_URL_KEY, PRIVATE_KEY, POLYGON_API_URL_KEY} = process.env; //environment variables are being loaded here.
  
 module.exports = {
   solidity: "0.8.17",
   defaultNetwork: 'goerli',
   networks: {
     hardhat: {},
     goerli: {
         url: API_URL_KEY,
         accounts: [`0x${PRIVATE_KEY}`]
     },
     matic: {
      url: POLYGON_API_URL_KEY,
      accounts: [`0x${PRIVATE_KEY}`]
    },
   }
 };