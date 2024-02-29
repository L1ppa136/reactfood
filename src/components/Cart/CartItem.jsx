import { CartContext } from "../CartContextProvider/CartContextProvider";
import { useContext } from "react";

export default function CartItem({orderItem, toFormatPrice}) {
  const {updateItemQuantity} = useContext(CartContext);

  const orderedItemPrice = toFormatPrice(orderItem.price)

  return (
    <li className="cart-item">
        <p>{orderItem.name} - {orderItem.quantity} x ${orderedItemPrice}</p>

        <div className="cart-item-actions">
            <button onClick={() => updateItemQuantity(orderItem.id, -1)}>-</button>
              {orderItem.quantity}
            <button onClick={() => updateItemQuantity(orderItem.id, 1)}>+</button>
        </div>
    </li>
  )
}