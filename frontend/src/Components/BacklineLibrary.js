import React, { useState } from "react";
import './BacklineLibrary.css'

const BacklineLibrary = () => {

    const [ attempt, setAttempt ] = useState(false)
    const [ valid, setValid ] = useState(false)
    const [ submit, setSubmitted ] = useState(false)

    const [ formValues, setFormValues ] = useState({
        gearType: "",
        modelName: "",
        rentalCompany: "",
        miscNotes: ""
    })

    const handleAllFormChanges = e => {
        setValid(false)
        const value = e.target.value
        setFormValues({ ...formValues, [e.target.name]: value})
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        setAttempt(true)
        if(formValues.gearType && formValues.modelName && formValues.rentalCompany){
            setValid(true)
            setSubmitted(true)
            setAttempt(false)
            setFormValues({
                gearType: "",
                modelName: "",
                rentalCompany: "",
                miscNotes: ""
            })
        }
    }

    // const [ barcodeText, setBarcodeText ] = useState("")
    // const [ barcode, setBarcode ] = useState(null)

    // const handleChange = e => {
    //     setBarcodeText( e.target.value )
    //     console.log(barcodeText)
    // }

    // const handleSubmit = e => {
    //     e.preventDefault()
    //     console.log("I have been submitted!!")
    // }

    return (
        <div className='backline-container'>
            Backline Library
             <form onSubmit={ handleFormSubmit }>
                { submit && valid ? <div className="success-message">Item has been added to the library!</div> : null }
                <label>Gear Type:
                    <input
                        value={ formValues.gearType }
                        placeholder="Gear Type"
                        name="gearType"
                        onChange={ handleAllFormChanges } />
                    { attempt && !formValues.gearType ? <span>This field is required.</span> : null }
                </label>
                <label>Model Name:
                    <input
                        value={ formValues.modelName }
                        placeholder="Model Name"
                        name="modelName"
                        onChange={ handleAllFormChanges } />
                    { attempt && !formValues.modelName ? <span>This field is required.</span> : null }
                </label>
                <label>Rental Company:
                    <input
                        value={ formValues.rentalCompany }
                        placeholder="Rental Company"
                        name="rentalCompany"
                        onChange={ handleAllFormChanges } />
                    { attempt && !formValues.rentalCompany ? <span>This field is required.</span> : null }
                </label>
                <label>Miscelleanous Notes:
                    <input
                        value={ formValues.miscNotes }
                        placeholder="Miscellaneous Notes"
                        name="miscNotes"
                        onChange={ handleAllFormChanges } />
                </label>
                <input
                    type="submit"
                    onSubmit={ handleFormSubmit } />
            </form>
        </div>
    )
}


export default BacklineLibrary;