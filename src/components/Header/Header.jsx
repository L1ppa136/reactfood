import LogoImg from "../../assets/logo.jpg";

export default function Header({onCartModalOpen}) {

  return (
    <div id="main-header">
        <h1 id="title"><img src={LogoImg} alt="Main Header Logo"/>REACTFOOD</h1>
        <button id="text-button-header" onClick={onCartModalOpen}>Cart(0)</button>
    </div>
  )
}