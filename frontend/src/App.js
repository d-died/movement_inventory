import React, { useState } from "react";

const App = () => {

    const [ barcodeText, setBarcodeText ] = useState("")
    const [ barcode, setBarcode ] = useState(null)

    const handleChange = e => {
        setBarcodeText( e.target.value )
        console.log(barcodeText)
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log("I have been submitted!!")
    }

    return (
        <form>
            <input 
                type="text" 
                name="barcode" 
                value={barcodeText} 
                onChange={handleChange} 
                onSubmit={handleSubmit}
            />
        </form>
    )
}

export default App