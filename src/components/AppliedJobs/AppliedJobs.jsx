import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getJobApplication } from "../../uitilite/LocalStorage";


const AppliedJobs = () => {
    const [jobApplied, setJobApplied] = useState([])
    const jobs = useLoaderData()
    useEffect(() => {
        const storedJobIds = getJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
            setJobApplied(jobsApplied)
        }
    }, [jobs]);
    return (
        <div>
            <h1>Applied Jobs sections</h1>
            <div className="flex gap-5 items-center justify-center" >
            {
                jobApplied.map(job => <div key={job.id}> 
                    <img src={job.logo} alt="" />
                    <p className="font-bold">{job.company_name}</p>
                    <p>{job.experiences}</p>
                </div>)
            }
            </div>
        </div>
    );
};

export default AppliedJobs;