import { useState } from "react";
import { donate } from "../web3/contract";

export default function DonateForm() {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDonate = async () => {
    try {
      setLoading(true);

      const tx = await donate(amount, message, link);

      await fetch("http://localhost:5000/api/donations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            donorAddress: window.ethereum.selectedAddress,
            amount,
            message,
            mediaLink: link,
            txHash: tx.hash,
        }),
      });

      setAmount("");
      setMessage("");
      setLink("");

      alert("Donation sent!");
    } catch (e) {
      console.error(e);
      alert("Donation failed!");
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2>Send Donation</h2>
      <input placeholder="Amount (ETH)" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <input placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
      <input placeholder="Media link" value={link} onChange={(e) => setLink(e.target.value)} />

      <button onClick={handleDonate} disabled={loading}>
        {loading ? "Processing..." : "Donate ETH"}
      </button>
    </div>
  );
}