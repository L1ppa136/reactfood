import Input from "../Input/Input";

export default function CheckoutForm({totalAmount, items, onSubmit, onBack}) {
    const legendStyle = {position: "relative", textAlign: "left", fontWeight: "bold", color: "#ffab04"};
    const fieldSetStyle = {marginBottom: "2%"};


  return (
    <form onSubmit={(e)=> onSubmit(e)}>
        <h2 className="control-row">
            Checkout
        </h2>
        <fieldset style={fieldSetStyle}>
            <legend style={legendStyle}>Order Summary</legend>
            <ul>
                {items.map(item => 
                    <li key={item.id} className="control-row">{item.quantity} x {item.name}</li>  
                    )}
            </ul>
            <hr/>
            <p className="control-row" style={{fontWeight: "bold"}}>Total amount: ${totalAmount}</p>
        </fieldset>
        <fieldset style={fieldSetStyle}>
            <legend style={legendStyle}>Customer Info</legend>
            <Input type="text" id="name" name="name" label="Full Name"/>
            <Input type="email" id="email" name="email" label="E-mail"/>
        </fieldset>
        <fieldset style={fieldSetStyle}>
            <legend style={legendStyle}>Delivery Address</legend>
            <div className="address">
                <Input type="text" id="street" name="street" label="Street"/>
                <Input type="text" id="postal-code" name="postal-code" label="Postal Code"/>
                <Input type="text" id="city" name="city" label="City"/>
            </div>
        </fieldset>
        <Input type="text" id="remark" name="remark" label="Remark"/>
        <div className="modal-actions">
              <button onClick={onBack} className="text-button">Back</button>
              <button type="submit" className="button">Submit Order</button>
        </div>
    </form>
  )
}