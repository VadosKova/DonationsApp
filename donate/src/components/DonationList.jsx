import { useEffect, useState } from "react";

export default function DonationList() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/donations")
      .then((res) => res.json())
      .then(setDonations);
  }, []);

  return (
    <div className="card">
      <h2>Recent Donations</h2>
      {donations.map((d, i) => (
        <div className="donation" key={i}>
          <p><b>{d.amount} ETH</b></p>
          <p>{d.message}</p>
          {d.mediaLink && (
            <a
              className="link"
              href={d.mediaLink}
              target="_blank"
            >
              Open media
            </a>
          )}
        </div>
      ))}
    </div>
  );
}