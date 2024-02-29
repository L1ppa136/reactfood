import EmptyCartImg from "../../assets/cart_empty.png";

export default function EmptyCart({onClose}) {
  return (
    <>
    <div className="empty-cart">
        <h3>Your cart is empty!</h3>
        <img src={EmptyCartImg} alt="Empty Cart Image"/>
    </div>
    <div className="modal-actions">
      <button onClick={onClose} className="text-button">Close</button>
    </div>    
    </>
  )
}