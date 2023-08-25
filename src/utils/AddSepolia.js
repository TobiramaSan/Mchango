const network = 'Test Network';
const sepoliaChainId = '0xaa36a7';

const checkAndAddSepoliaNetwork = async () => {
  console.log('Connecting, please wait');

  try {
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });

    if (chainId === sepoliaChainId) {
      console.log(`Sepolia ${network} already exists`);
    } else {
      console.log(`Switching to Sepolia ${network}`);
    }

    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainName: `Sepolia Test Network`,
          chainId: sepoliaChainId,
          nativeCurrency: {
            name: 'Ether',
            symbol: 'ETH',
            decimals: 18,
          },
          rpcUrls: ['https://ethereum-sepolia.blockpi.network/v1/rpc/public'], //
        },
      ],
    });

    console.log(`Sepolia ${network} added`);
  } catch (error) {
    console.error(error, 'An error occurred while adding the network');
  }
};

export { checkAndAddSepoliaNetwork };
