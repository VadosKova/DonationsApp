import { ethers } from "ethers";
import abi from "./abi.json";

const contractAddress = "0x5e9BDFa6DE23E1ECC94cF64f94aF4c353Bb59cd1";

export const donate = async (amount, message, mediaLink) => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  const contract = new ethers.Contract(contractAddress, abi, signer);

  const tx = await contract.donate(message, mediaLink, {
    value: ethers.parseEther(amount),
  });

  return await tx.wait();
};