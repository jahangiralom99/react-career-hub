/* eslint-disable no-unused-vars */
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getJobApplication, saveJobApplication } from "../../uitilite/LocalStorage";


const JobDetails = () => {
  const jobs = useLoaderData();
  const id = useParams();
  console.log(id);
  const job = jobs.find((job) => job.id === parseFloat(id.jobId));
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
    salary,
    job_title,
    

  } = job;

  
  const handleApplyBtn = () => {
    saveJobApplication(parseInt(id.jobId))
    toast("successfully apply!");
  }
  
  
  
  return (
    <div className="mt-12 px-6">
      <h1 className="font-bold text-4xl text-center">job Details</h1>
      <div className="md:flex justify-center items-center mt-12 gap-6">
        <div className="md:w-[60%] space-y-4">
          <p>
            <span className="font-bold">Job Description : </span>
            {job_description}
          </p>
          <p>
            <span className="font-bold">Job Responsibility : </span>
            {job_responsibility}
          </p>
          <p>
            <span className="font-bold">Educational Requirements: </span>
            {educational_requirements}
          </p>
          <p>
            <span className="font-bold">Experiences: </span>
            {experiences}
          </p>
        </div>
              <div className="bg-[#7E90FE19] md:w-[40%] space-y-4 mt-6 md:mt-0 rounded-lg shadow-lg p-4">
                  <h4 className="font-bold">Job Details</h4>
                  <hr />
                  <p><span className="font-bold">Salary :</span>{salary}</p>  
                  <p><span className="font-bold">Job Title :</span>{job_title}</p>  
                  <h4 className="font-bold">Contact Information</h4>
                  <p><span className="font-bold">Phone: </span>{contact_information.phone }</p> 
                  <p><span className="font-bold">Email: </span>{contact_information.email}</p> 
                  <p><span className="font-bold">Address: </span>{contact_information.address}</p> 
                  <button onClick={handleApplyBtn} className="btn w-full  bg-[#7E90FE] hover:bg-[#324cf6] text-white">Apply Now</button>
              </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
