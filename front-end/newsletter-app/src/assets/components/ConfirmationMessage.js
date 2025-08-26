import checkmark from "../../assets/images/confirm.png";
import logo from "../../assets/images/logo-mindtech.svg";
import "../../styles/ConfirmationMessage.css";

const ConfirmationMessage = () => {
  return (
    <div className="card-container confirmation-card">
      <div className="confirmation-content">
        <img
          src={checkmark}
          alt="Ícone de Confirmação"
          className="checkmark-icon"
        />
        <h2>Obrigado por se inscrever na nossa newsletter!</h2>
        <p>
          Agora você faz parte da comunidade Mindtech e está a um passo de ficar
          atualizado com as últimas inovações e tendências em Internet das
          Coisas (IoT).
        </p>
        <img src={logo} alt="Mindtech Logo" className="logo-bottom" />
      </div>
    </div>
  );
};

export default ConfirmationMessage;
