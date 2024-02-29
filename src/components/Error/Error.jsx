import ToastImg from "../../assets/toast_error.png";

export default function Error({ title, message, onConfirm }) {
    return (
      <div className="error">
        <h2>{title}</h2>
        <img src={ToastImg} alt="Toast error image"/>
        <p>{message}</p>
        {onConfirm && (
          <div id="confirmation-actions">
            <button onClick={onConfirm} className="button">
              Okay
            </button>
          </div>
        )}
      </div>
    );
  }
  