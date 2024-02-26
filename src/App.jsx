import {useState} from "react";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  function handleCartModalClose(){
      setModalOpen(false);
  }

  function handleCartModalOpen(){
      setModalOpen(true);
  }


  return (
    <>
      <Header onCartModalOpen={handleCartModalOpen}/>
      <Cart onClose={handleCartModalClose} open={modalOpen}/>
      <Meals />
    </>
  );
}

export default App;
