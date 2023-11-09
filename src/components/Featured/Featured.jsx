import { useEffect, useState } from "react";
import FeatureJobs from "../FeatureJobs/FeatureJobs";

const Featured = () => {
  const [jobs, setJobs] = useState([]);

  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="mt-12 space-y-4">
      <h1 className="text-4xl text-center font-bold">Featured Jobs</h1>
      <p className="text-[#757575] text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.slice(0, dataLength).map((job) => (
          <FeatureJobs key={job.id} job={job}></FeatureJobs>
        ))}
      </div>
          <div className="text-center">
          <div className={dataLength ===jobs.length ? "hidden" : ''}>
        <button onClick={()=> setDataLength(jobs.length)} className="btn  bg-[#7E90FE] hover:bg-[#324cf6] text-white">
          See All Jobs
        </button>
      </div>
      </div>
    </div>
  );
};

export default Featured;
