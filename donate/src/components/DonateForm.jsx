import { useState } from "react";
import { donate } from "../web3/contract";

export default function DonateForm() {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [link, setLink] = useState("");

  
}