export default function CartItem({orderItem}) {
  return (
    <li className="cart-item">
        <p>Item name - dynamic quantity x $Item price</p>

        <div className="cart-item-actions">
            <button>-</button>quantity<button>+</button>
        </div>
    </li>
  )
}