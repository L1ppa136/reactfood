import CartItem from "./CartItem";

export default function Cart({open, onClose}) {

    
  return (
    <dialog className="modal" open={open}>
        <div className="cart">
            <h2>Your cart</h2>
            <ul>
                <CartItem/>
            </ul>
            <p className="cart-total">$Cart total</p>
            <div className="modal-actions">
                <button onClick={onClose} className="text-button">Close</button>
                <button className="button">Go to Checkout</button>
            </div>
        </div>
    </dialog>
  )
}