import { CartContext } from "../CartContextProvider/CartContextProvider";
import { useContext } from "react";

export default function MealItem({meal}) {

    const { addItemToCart } = useContext(CartContext);

  return (
        <article className="meal-item">
            <h3>
                <img src={`http://localhost:3000/${meal.image}`} alt="Meal Image"/>
                {meal.name}
            </h3>
            <p className="meal-item-price">${meal.price}</p>
            <p className="meal-item-description">{meal.description}</p>
            <div className="meal-item-actions">
                <button className="button" onClick={() => addItemToCart(meal)}>Add to cart</button>
            </div>
        </article>
  )
}