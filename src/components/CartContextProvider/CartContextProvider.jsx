import { createContext, useReducer } from "react";

export const CartContext = createContext({
    items: [],
    addItemToCart: () => {}, //helps with autocompletion
    updateItemQuantity: () => {}
});

function shoppingCartReducer(state, action){
    if(action.type === "ADD_ITEM"){
        const updatedItems = [...state.items];
    
        const existingCartItemIndex = updatedItems.findIndex(
          (cartItem) => cartItem.id === action.payload.id
        );
        const existingCartItem = updatedItems[existingCartItemIndex];
  
        if (existingCartItem) {
          const updatedItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity + 1,
          };
          updatedItems[existingCartItemIndex] = updatedItem;
        } else {
          updatedItems.push({
            id: action.payload.id,
            name: action.payload.name,
            price: action.payload.price,
            quantity: 1
          });
        }
  
        return {
            ...state,
          items: updatedItems,
        };
    }
    if(action.type === "UPDATE_ITEM"){
        const updatedItems = [...state.items];
        const updatedItemIndex = updatedItems.findIndex(
          (item) => item.id === action.payload.mealId
        );
  
        const updatedItem = {
          ...updatedItems[updatedItemIndex],
        };
  
        updatedItem.quantity += action.payload.amount;
  
        if (updatedItem.quantity <= 0) {
          updatedItems.splice(updatedItemIndex, 1);
        } else {
          updatedItems[updatedItemIndex] = updatedItem;
        }
  
        return {
            ...state,
          items: updatedItems,
        };
    }

    if(action.type === "RESET_ITEM"){
      return {
        ...state,
        items: []
      };
    }

    return state;
}



export default function CartContextProvider({children}){

    const [shoppingCartState, shoppingCartDispatch] = useReducer(shoppingCartReducer, {
        items: [],
      });
    
      function handleAddItemToCart(id) {
        shoppingCartDispatch({
            type: "ADD_ITEM",
            payload: id
        });
      }
    
      function handleUpdateCartItemQuantity(mealId, amount) {
        shoppingCartDispatch({
            type: "UPDATE_ITEM",
            payload: {
                mealId,
                amount
            }
        });
      }

      function handleResetCart(){
        shoppingCartDispatch({
          type: "RESET_ITEM"
        });
      }
    
      const ctxValue = {
        items: shoppingCartState.items,
        addItemToCart: handleAddItemToCart,
        updateItemQuantity: handleUpdateCartItemQuantity,
        resetShoppingCart: handleResetCart
      }

      return <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
}