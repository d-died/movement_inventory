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

    const [ attempt, setAttempt ] = useState(false)
    const [ valid, setValid ] = useState(false)
    const [ submit, setSubmitted ] = useState(false)

    const handleAllFormChanges = e => {
        setValid(false)
        const value = e.target.value
        setFormValues({ ...formValues, [e.target.name]: value })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        setAttempt(true)
        if(formValues.stageName && formValues.stageManager && formValues.managerCell){
            setValid(true)
            setSubmitted(true)
            setAttempt(false)
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
                    { submit && valid ? <div className="success-message">Stage Profile has been submitted!</div> : null }
                    <label>Stage Name:
                        <input
                            value={ formValues.stageName }
                            placeholder="Stage Name"
                            name="stageName"
                            onChange={ handleAllFormChanges } />
                    </label>
                    { attempt && !formValues.stageName ? <span>This field is required.</span> : null }
                    <br/>
                    <label>Stage Manager Name:
                        <input 
                            value={ formValues.stageManager }
                            placeholder="Manager Name"
                            name="stageManager"
                            onChange={ handleAllFormChanges } />
                        { attempt && !formValues.stageManager ? <span>This field is required.</span> : null }
                    </label>
                    <br/>
                    <label>Stage Manager Cell:
                        <input
                            value={ formValues.managerCell }
                            placeholder="Manager Cell"
                            name="managerCell"
                            onChange={ handleAllFormChanges } />
                        { attempt && !formValues.managerCell ? <span>This field is required.</span> : null }
                    </label>
                    <br/>
                    <label>Stage Manager Email:
                        <input
                            value={ formValues.managerEmail }
                            placeholder="Manager Email"
                            name="managerEmail"
                            onChange={ handleAllFormChanges } />
                        { attempt && !formValues.managerEmail ? <span>This field is required.</span> : null }
                    </label>
                    <br/>
                    <label>Intern Name:
                        <input
                            value={ formValues.internName }
                            placeholder="Intern Name"
                            name="internName"
                            onChange={ handleAllFormChanges } />
                        { attempt && !formValues.internName ? <span>This field is required.</span> : null }
                    </label>
                    <br/>
                    <label>Intern Cell:
                        <input
                            value={ formValues.internCell }
                            placeholder="Intern Cell"
                            name="internCell"
                            onChange={ handleAllFormChanges } />
                        { attempt && !formValues.internCell ? <span>This field is required.</span> : null }
                    </label>
                    <br/>
                    <input 
                        type="submit"
                        onSubmit={ handleFormSubmit } />
                </form>
            </div>
        </div>
    )
}


export default StageManagerProfiles;