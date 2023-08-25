import { ethers } from 'ethers';
import { abi } from './abi';
const contractAddress = '0xe75c1e7e1C711CD398398dE3b2291dEecd3bE99c';

const donate = async ({ address, amount }) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const mchango = new ethers.Contract(contractAddress, abi, signer);
  try {
    const tx = await mchango.donate(address, {
      gasLimit: 500000,
      value: ethers.utils.parseEther(amount),
    });
    await tx.wait();
    return 'Thanks for your donation';
  } catch (error) {
    console.error(error, 'This transaction failed');
  }
};

export { donate };
