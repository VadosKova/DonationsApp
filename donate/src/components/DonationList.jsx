import { useEffect, useState } from "react";

export default function DonationList() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/donations")
      .then((res) => res.json())
      .then(setDonations);
  }, []);

  return (
    <div>
      {donations.map((d, i) => (
        <div key={i}>
          <p>{d.amount} ETH</p>
          <p>{d.message}</p>
          <a href={d.mediaLink}>{d.mediaLink}</a>
        </div>
      ))}
    </div>
  );
}