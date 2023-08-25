import { ethers } from 'ethers';
import { abi } from './abi';
const contractAddress = '0xe75c1e7e1C711CD398398dE3b2291dEecd3bE99c';

const createGroup = async ({
  groupName,
  groupDescription,
  contributionValue,
}) => {
  const amount = ethers.utils.parseEther(contributionValue);
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const mchango = new ethers.Contract(contractAddress, abi, signer);

    const transaction = await mchango.createGroup(
      groupDescription,
      groupName,
      amount
    );

    await transaction.wait();
    return 'You have successfully created a new group';
  } catch (error) {
    console.error(error, 'This transaction failed');
  }
};

export { createGroup };
