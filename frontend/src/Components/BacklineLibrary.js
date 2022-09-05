import React, { useState } from "react";

const BacklineLibrary = () => {

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
        <div>
            Backline Library
             <form>
                <input 
                    type="text" 
                    name="barcode" 
                    value={barcodeText} 
                    onChange={handleChange} 
                    onSubmit={handleSubmit}
                />
            </form>
        </div>
    )
}


export default BacklineLibrary;