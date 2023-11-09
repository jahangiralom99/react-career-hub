import PropTypes from "prop-types";
import { FaLocationArrow, FaCircleDollarToSlot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FeatureJobs = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="border p-4 space-y-4 shadow-sm flex-col flex-grow">
      <img className="w-[200px] h-[70px]" src={logo} alt="" />
      <h1 className="text-2xl font-bold">{job_title}</h1>
      <h4 className="text-[#757575]">{company_name}</h4>
      <div className="flex gap-4">
        <button className="btn text-[#7E90FE] border-[#7E90FE]">
          {remote_or_onsite}
        </button>
        <button className="btn  text-[#7E90FE] border-[#7E90FE]">
          {job_type}
        </button>
      </div>
      <div className="flex gap-4 ">
        <p className="text-[#757575] flex items-center gap-2">
          <FaLocationArrow></FaLocationArrow>
          {location}
        </p>
        <p className="text-[#757575] flex items-center gap-2">
          <FaCircleDollarToSlot></FaCircleDollarToSlot>
          {salary}
        </p>
      </div>
      <Link to={`job/${id}`}>
      <button className="btn bg-[#7E90FE] hover:bg-[#324cf6] text-white">
        View Details
      </button>
      </Link>
    </div>
  );
};

FeatureJobs.propTypes = {
  job: PropTypes.object.isRequired,
};

export default FeatureJobs;
