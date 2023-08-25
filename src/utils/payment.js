import { ethers } from 'ethers';
import { abi } from './abi';
const contractAddress = '0xe75c1e7e1C711CD398398dE3b2291dEecd3bE99c';

const subscribePremium = async () => {
  console.log(`Executing function`);
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const mchango = new ethers.Contract(contractAddress, abi, signer);

    const transaction = await mchango.subscribePremium({
      gasLimit: 500000, // Adjust this gas limit as needed
    });

    await transaction.wait();

    return 'Thanks for your donation';
  } catch (error) {
    console.error(error, 'This transaction failed');
    return 'This transaction failed';
  }
};

const subscribeExclusive = async () => {
  console.log(`Executing function`);
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const mchango = new ethers.Contract(contractAddress, abi, signer);
    await mchango.subscribeExclusive();
    return 'Thanks for your donation';
  } catch (error) {
    console.error(error, 'This transaction failed');
    return 'This transaction failed';
  }
};

export { subscribeExclusive, subscribePremium };
