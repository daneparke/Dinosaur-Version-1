import React from 'react'

const Joblist = (props) => {
    let jobs = props.jobListings.map(job => {
        return (
            <div className='jobListings'>
                <h4 className='newJobTitle'>{job.title}</h4>
                <small>{job.pay}</small>
                <p className='newJobDescription'>{job.description}</p>
                <small>{job.interested.length} dinos are interested in this job</small>
            </div>
        )
    })
    return (
        <>
            <div className='container jobListCont col-6'>
                <h2 className='row jobListHeader'>Job Listings</h2>
                <div className='container'>{jobs}</div>
            </div>
        </>

    )
}
export default Joblist