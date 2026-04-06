import { ethers } from "ethers";
import abi from "./abi.json";

const contractAddress = "0x680026c0BcF648Da2B60D017e127D18CF9e302eB";

export const donate = async (amount, message, mediaLink) => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  const contract = new ethers.Contract(contractAddress, abi, signer);

  const tx = await contract.donate(message, mediaLink, {
    value: ethers.parseEther(amount),
  });

  return await tx.wait();
};