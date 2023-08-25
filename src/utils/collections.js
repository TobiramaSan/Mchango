import { ethers } from 'ethers';
import { abi } from './abi';
const contractAddress = '0xe75c1e7e1C711CD398398dE3b2291dEecd3bE99c';

const startCollection = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const mchango = new ethers.Contract(contractAddress, abi, signer);

  try {
    const tx = await mchango.startCollection();
    await tx.wait();
    return 'Collection started';
  } catch (error) {
    console.error(error, 'This transaction failed');
  }
};

const endCollection = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const mchango = new ethers.Contract(contractAddress, abi, signer);

  try {
    const tx = await mchango.endCollection();
    await tx.wait();
    return 'Collection period has ended';
  } catch (error) {
    console.error(error, 'This transaction failed');
  }
};

const releaseCollection = async ({ address }) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const mchango = new ethers.Contract(contractAddress, abi, signer);

  try {
    const tx = await mchango.releaseCollection(address);
    await tx.wait();
    return `Collection released to ${address}`;
  } catch (error) {
    console.error(error, 'This transaction failed');
  }
};

export { startCollection, endCollection, releaseCollection };
