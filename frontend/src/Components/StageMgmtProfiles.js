import React, { useState } from "react";
import './StageMgmtProfiles.css'


const StageManagerProfiles = () => {

    const [ formValues, setFormValues ] = useState({
        stageName: "",
        stageManager: "",
        managerCell: "",
        managerEmail: "",
        internName: "",
        internCell: ""
    })

    const [ submitted, setSubmitted ] = useState(false)
    const [ valid, setValid ] = useState(false)

    const handleAllFormChanges = e => {
        const value = e.target.value
        setFormValues({ ...formValues, [e.target.name]: value })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        if(formValues.stageName && formValues.stageManager && formValues.managerCell){
            setValid(true)
            setSubmitted(true)
            setFormValues({
                stageName: "",
                stageManager: "",
                managerCell: "",
                managerEmail: "",
                internName: "",
                internCell: ""
            })
        }
    }


    return (
        <div className="mgmt-prof-container">
            <h1>Stage Manager Profiles</h1>
            <div className="form-container">
                <form onSubmit={ handleFormSubmit }>
                    { submitted && valid ? <div className="success-message">Stage Profile has been submitted!</div> : null }
                    <label>Stage Name:
                        <input
                            value={ formValues.stageName }
                            placeholder="Stage Name"
                            name="stageName"
                            onChange={ handleAllFormChanges } />
                        { submitted && !formValues.stageName ? <span>This field is required.</span> : null }
                    </label>
                    <label>Stage Manager Name:
                        <input 
                            value={ formValues.stageManager }
                            placeholder="Manager Name"
                            name="stageManager"
                            onChange={ handleAllFormChanges } />
                        { submitted && !formValues.stageManager ? <span>This field is required.</span> : null }
                    </label>
                    <label>Stage Manager Cell:
                        <input
                            value={ formValues.managerCell }
                            placeholder="Manager Cell"
                            name="managerCell"
                            onChange={ handleAllFormChanges } />
                        { submitted && !formValues.managerCell ? <span>This field is required.</span> : null }
                    </label>
                    <label>Stage Manager Email:
                        <input
                            value={ formValues.managerEmail }
                            placeholder="Manager Email"
                            name="managerEmail"
                            onChange={ handleAllFormChanges } />
                        { submitted && !formValues.managerEmail ? <span>Please complete this field.</span> : null }
                    </label>
                    <label>Intern Name:
                        <input
                            value={ formValues.internName }
                            placeholder="Intern Name"
                            name="internName"
                            onChange={ handleAllFormChanges } />
                        { submitted && !formValues.internName ? <span>Please complete this field.</span> : null }
                    </label>
                    <label>Intern Cell:
                        <input
                            value={ formValues.internCell }
                            placeholder="Intern Cell"
                            name="internCell"
                            onChange={ handleAllFormChanges } />
                        { submitted && !formValues.internCell ? <span>Please complete this field.</span> : null }
                    </label>
                    <input 
                        type="submit"
                        onSubmit={ handleFormSubmit } />
                </form>
            </div>
        </div>
    )
}


export default StageManagerProfiles;