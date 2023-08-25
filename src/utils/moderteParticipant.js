import { ethers } from 'ethers';
import { abi } from './abi';
const contractAddress = '0xe75c1e7e1C711CD398398dE3b2291dEecd3bE99c';

const moderateParticipant = async ({ address, verdict }) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const mchango = new ethers.Contract(contractAddress, abi, signer);

  try {
    console.log('Executing Function');
    const tx = await mchango.moderateParticipant(address, verdict);
    await tx.wait();
    return 'Participant moderated';
  } catch (error) {
    console.error(error, 'This transaction failed');
  }
};

export { moderateParticipant };
