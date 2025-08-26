// src/App.js
import { useState } from "react";
import "../src/styles/App.css";
import ConfirmationMessage from "./assets/components/ConfirmationMessage";
import SubscriptionForm from "./assets/components/SubscriptionForm";

function App() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [apiStatus, setApiStatus] = useState(null);
  const [apiMessage, setApiMessage] = useState("");

  const handleSubscribe = async (email) => {
    try {
      const response = await fetch("http://localhost:3001/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubscribed(true);
      } else {
        setApiStatus("error");
        setApiMessage(data.error);
      }
    } catch (error) {
      setApiStatus("error");
      setApiMessage("Ocorreu um erro ao conectar com o servidor.");
    }
  };

  return (
    <div className="App">
      {isSubscribed ? (
        <ConfirmationMessage />
      ) : (
        <SubscriptionForm
          onSubscribe={handleSubscribe}
          status={apiStatus}
          message={apiMessage}
        />
      )}
    </div>
  );
}

export default App;
