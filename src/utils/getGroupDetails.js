import { ethers } from 'ethers';
import { abi } from './abi';
const contractAddress = '0xe75c1e7e1C711CD398398dE3b2291dEecd3bE99c';

const groupDetails = async ({ adminAddress }) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const mchango = new ethers.Contract(contractAddress, abi, signer);

  try {
    const result = await mchango.getGroupDetails(adminAddress);
    const [name, description, balance, admin, groupMembers] = result;

    return {
      name,
      description,
      balance: balance.toString(),
      admin,
      groupMembers,
    };
  } catch (error) {
    console.error(error, 'An error occurred');
  }
};

export { groupDetails };
