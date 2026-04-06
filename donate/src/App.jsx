import DonateForm from "../components/DonateForm";
import DonationList from "../components/DonationList";
import './App.css'

export default function App() {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Crypto Donate</h1>
      <DonateForm />
      <DonationList />
    </div>
  );
}