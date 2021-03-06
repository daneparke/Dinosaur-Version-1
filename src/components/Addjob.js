import React from 'react'

const Addjob = (props) => {
    return (
        <>
            <div className='container addJobCont col-6'>
                <div className='jobForm'>
                    <h3><b>Add a Job</b></h3>
                    <label>Title</label>
                    <input onChange={props.titleInput} value={props.jobTitle} className='inputFields' type='text' placeholder='Job Title'></input>
                    <label>Compensation</label>
                    <input onChange={props.compensationInput} value={props.jobCompensation} className='inputFields' type='text' placeholder='$##.##'></input>
                    <label>Description</label>
                    <input onChange={props.descriptionInput} value={props.jobDescription} className='descriptionCont inputFields' type='text' placeholder='Description of Job'></input>
                    <button onClick={props.submitJob} type="submit" className="btn btnColor">Submit</button>
                </div>
            </div>
        </>
    )
}
export default Addjob