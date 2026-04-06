import DonateForm from "../components/DonateForm";
import DonationList from "../components/DonationList";
import './App.css'

export default function App() {
  return (
    <div>
      <h1>Crypto Donate</h1>
      <DonateForm />
      <DonationList />
    </div>
  );
}