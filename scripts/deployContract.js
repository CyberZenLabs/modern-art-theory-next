/**
 *  This script will calculate the constructor arguments for BoredApe.sol and deploy it.
 *  After deploying, you can access the contract on etherscan.io with the deployed contract address.
 */

const hre = require('hardhat')
const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')
const whitelist = require('./whitelist.js')

const BASE_URI = 'ipfs://Qmf7u4LVuWJVxG6VEa6J2h5xX5VSA4v26J1KwVAMnSCvqD/'
const proxyRegistryAddressGoerli = '0xAB43bA48c9edF4C2C4bB01237348D1D7B28ef168'
const proxyRegistryAddressMainnet = '0xa5409ec958c83c3f309868babaca7c86dcb077c1'

async function main() {
  // Calculate merkle root from the whitelist array
  const leafNodes = whitelist.map((addr) => keccak256(addr))
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })
  const root = merkleTree.getRoot()

  // Deploy the contract
  const BoredApes = await hre.ethers.getContractFactory('ModernArtTheory')
  const boredApes = await BoredApes.deploy(
    BASE_URI,
    root,
    proxyRegistryAddressGoerli
  )

  await boredApes.deployed()

  console.log('BoredApes deployed to:', boredApes.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
