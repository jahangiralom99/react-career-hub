import img from "../../assets/images/user.png"

const Banner = () => {
    return (
        <div className="md:flex justify-center items-center mt-12">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold">One Step Closer To Your <span className="text-[#9873FF]">Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn bg-[#9873FF] text-white">Get Started</button>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;