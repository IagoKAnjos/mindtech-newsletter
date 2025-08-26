// src/components/SubscriptionForm.js
import { useState } from "react";
import iotImage from "../../assets/images/Imagem.png";
import logo from "../../assets/images/logo-mindtech.png";
import "../../styles/SubscriptionForm.css";

const SubscriptionForm = ({ onSubscribe, status, message }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      onSubscribe(email);
    }
  };

  return (
    <div className="card-container">
      <div className="form-content">
        <h2>Inscreva-se agora!</h2>
        <p className="description">
          Preencha o formulário abaixo para se inscrever e comece a receber
          nossas atualizações diretamente em sua caixa de entrada.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Inscrever-se</button>
        </form>
        {status && <p className={`message ${status}`}>{message}</p>}
      </div>
      <div className="image-content">
        <img src={iotImage} alt="Ilustração de IoT" className="iot-image" />
        <img src={logo} alt="Mindtech Logo" className="mindtech-logo" />
      </div>
    </div>
  );
};

export default SubscriptionForm;
