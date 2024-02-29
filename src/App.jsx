import { useState} from "react";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";
import CartContextProvider from "./components/CartContextProvider/CartContextProvider";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  function handleCartModalOpen(){
      setModalOpen(true);
  }

  return (
    <CartContextProvider>
      <Header onCartModalOpen={handleCartModalOpen} />
      <Cart setModalOpen={setModalOpen} open={modalOpen}/>
      <Meals />
    </CartContextProvider>
  );
}

export default App;
