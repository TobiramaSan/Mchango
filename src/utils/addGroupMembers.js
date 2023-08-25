import { ethers } from 'ethers';
import { abi } from './abi';
const contractAddress = '0xe75c1e7e1C711CD398398dE3b2291dEecd3bE99c';

const addMembers = async ({ name, address }) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const mchango = new ethers.Contract(contractAddress, abi, signer);

  try {
    console.log('Executing function');
    const tx = await mchango.addGroupMembers(name, address);
    await tx.wait();

    return 'Successfully added a group member';
  } catch (error) {
    console.error(error, 'Error adding a group member');
  }
};

export { addMembers };
