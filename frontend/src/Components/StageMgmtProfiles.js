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

    const handleStageChange = e => {
        setFormValues({...formValues, stageName: e.target.value })
    }

    const handleManagerChange = e => {
        setFormValues({...formValues, stageManager: e.target.value })
    }


    const handleManagerCellChange = e => {
        setFormValues({...formValues, managerCell: e.target.value })
    }


    const handleManagerEmailChange = e => {
        setFormValues({...formValues, managerEmail: e.target.value })
    }


    const handleInternChange = e => {
        setFormValues({...formValues, internName: e.target.value })
    }


    const handleInternCellChange = e => {
        setFormValues({...formValues, internCell: e.target.value })
    }



    return (
        <div className="mgmt-prof-container">
            <h1>Stage Manager Profiles</h1>
            <div className="form-container">
                <form>
                    <label>Stage Name:
                        <input
                            value={ formValues.stageName }
                            placeholder="Stage Name"
                            name="stageName"
                            onChange={ handleStageChange } />
                    </label>
                    <label>Stage Manager Name:
                        <input 
                            value={ formValues.stageManager }
                            placeholder="Manager Name"
                            name="stageManager"
                            onChange={ handleManagerChange } />
                    </label>
                    <label>Stage Manager Cell:
                        <input
                            value={ formValues.managerCell }
                            placeholder="Manager Cell"
                            name="managerCell"
                            onChange={ handleManagerCellChange } />
                    </label>
                    <label>Stage Manager Email:
                        <input
                            value={ formValues.managerEmail }
                            placeholder="Manager Email"
                            name="managerEmail"
                            onChange={ handleManagerEmailChange } />
                    </label>
                    <label>Intern Name:
                        <input
                            value={ formValues.internName }
                            placeholder="Intern Name"
                            name="internName"
                            onChange={ handleInternChange } />
                    </label>
                    <label>Intern Cell:
                        <input
                            value={ formValues.internCell }
                            placeholder="Intern Cell"
                            name="internCell"
                            onChange={ handleInternCellChange } />
                    </label>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}


export default StageManagerProfiles;