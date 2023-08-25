import { ethers } from 'ethers';
import { abi } from './abi';
const contractAddress = '0xe75c1e7e1C711CD398398dE3b2291dEecd3bE99c';

const resetEligibility = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const mchango = new ethers.Contract(contractAddress, abi, signer);

  try {
    const tx = await mchango.resetEligibility();
    await tx.wait();

    return 'All Members eligibility has been reset';
  } catch (error) {
    console.error(error, 'This transaction failed');
  }
};

export { resetEligibility };
