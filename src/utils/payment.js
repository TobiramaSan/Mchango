import { ethers } from 'ethers';
import { abi } from './abi';
const contractAddress = '0xe75c1e7e1C711CD398398dE3b2291dEecd3bE99c';

const subscribePremium = async (amount) => {
  console.log(`Executing function`);
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const mchango = new ethers.Contract(contractAddress, abi, signer);

    const transaction = await mchango.subscribePremium({
      gasLimit: 500000,
      value: ethers.utils.parseEther(amount),
    });

    await transaction.wait();

    return 'payment successful';
  } catch (error) {
    console.error(error, 'This transaction failed');
    return 'This transaction failed';
  }
};

const subscribeExclusive = async (amount) => {
  console.log(`Executing function`);
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const mchango = new ethers.Contract(contractAddress, abi, signer);

    const transaction = await mchango.subscribeExclusive({
      gasLimit: 500000,
      value: ethers.utils.parseEther(amount),
    });

    await transaction.wait();

    return 'Payment successful';
  } catch (error) {
    console.error(error, 'This transaction failed');
    return 'This transaction failed';
  }
};

export { subscribeExclusive, subscribePremium };
