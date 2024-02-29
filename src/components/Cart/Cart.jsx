import { useContext, useState } from "react";
import { CartContext } from "../CartContextProvider/CartContextProvider";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { createPortal } from "react-dom";
import { fetchOrders } from "../../utils/http";
import OrderFeedback from "../OrderFeedback/OrderFeedback";



function calcTotalOrderPrice(orderedItems){
  return orderedItems.reduce((acc, curr) => {
    return acc + (curr.price * curr.quantity);
  }, 0)
}
export default function Cart({open, setModalOpen}) {
  const [isAtCheckout, setIsAtCheckout] = useState(false);
  const [orderSentMessage, setOrderSentMessage] = useState("");
  const {items, resetShoppingCart} = useContext(CartContext);
  const cartIsEmpty = items.length === 0;
  const totalPrice = formattedPrice(calcTotalOrderPrice(items));
  
  function formattedPrice(price){
    const priceAsNumber = Number(price);
    return priceAsNumber.toFixed(2);
  }

  function handleCheckoutClick(){
    setIsAtCheckout(true);
  }

  function handleCartModalClose(){
    setModalOpen(false);
    setIsAtCheckout(false);
}

function handleBackClick(){
  setIsAtCheckout(false);
}

async function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const customerData = {
    name: formData.get("name"),
    email: formData.get("email"),
    city: formData.get("city"),
    street: formData.get("street"),
    ["postal-code"]: formData.get("postal-code"),
  };
  const remark = formData.get("remark");

  const order = {
    customer: customerData,
    remark: remark,
    items: items,
  };

  try {
    const response = await fetchOrders(order);
    setIsAtCheckout(false);
    resetShoppingCart();
    
    setOrderSentMessage("Order sent! Thank you!");

    setTimeout(() => {
      setOrderSentMessage("");
      setModalOpen(false);
    }, 2000);
  } catch (error) {
    console.error("Error sending order:", error);
    setOrderSentMessage(`Sorry, something went wrong!`);
    setTimeout(() => {
      setOrderSentMessage("");
      setModalOpen(false);
    }, 2000);
  }
}

return createPortal(
  <dialog className="modal" open={open}>
        <div className="cart">
          {orderSentMessage && 
            <OrderFeedback message={orderSentMessage}/>
          }
          {cartIsEmpty && !isAtCheckout && !orderSentMessage && <EmptyCart onClose={handleCartModalClose}/>}
          {!cartIsEmpty && !isAtCheckout &&
          <>
          <h2>Your cart</h2>
          <ul>
              {items.map(orderItem => 
                <CartItem key={orderItem.id} orderItem={orderItem} toFormatPrice={formattedPrice}/>
              )}
          </ul>
          <p className="cart-total">${totalPrice}</p>
          <div className="modal-actions">
              <button onClick={handleCartModalClose} className="text-button">Close</button>
              <button className="button" onClick={handleCheckoutClick} disabled={cartIsEmpty}>Go To Checkout</button>
          </div>
          </>}
          {isAtCheckout && !cartIsEmpty && <CheckoutForm totalAmount={totalPrice} items={items} onSubmit={handleSubmit} onBack={handleBackClick}/>}
        </div>
    </dialog>, document.getElementById("modal")
  )
}