const getJobApplication = () => {
    const storedJobApplication = localStorage.getItem("job-Application")
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication)
    }
    return [];
}


const saveJobApplication = (id) => {
    const storedJobApplication = getJobApplication();
    const exists = storedJobApplication.find(job => job === id);
    if (!exists) {
        storedJobApplication.push(id);
        localStorage.setItem('job-Application', JSON.stringify(storedJobApplication))
    }
}

export { getJobApplication, saveJobApplication}