// import GeneralInfo from "./components/GeneralInfo";
// import Education from "./components/Education";
// import Experience from "./components/Experience";

function CvPreview({ generalInfo, educationInfo, experienceInfo }) {
    return (
        <div className="cvPreview-div">
            <div className="general-info-preview">
                <h1 className="name">{generalInfo.name}</h1>
                <div className="contact-info">
                    <h2 className="contact-h2">Contact:</h2>
                    <p>Email: {generalInfo.email}</p>
                    <p>Phone: {generalInfo.phone}</p>
                </div>
            </div>

            <div className="education-info-preview">
                <h2 className="education-h2">Education: </h2>
                {educationInfo.map((item) => (
                    <div className="education-item" key={item.id}>
                        <p>Name of School: {item.schoolName}</p>
                        <p>Title of Study: {item.studyTitle}</p>
                        <p>Date of Study: {item.studyDate}</p>
                    </div>
                ))}
            </div>

            <div className="experience-info-preview">
                {experienceInfo.map((item) => (
                    <div className="experience-item" key={item.id}>
                        <h1>{item.companyName}</h1>
                        <h1>{item.position}</h1>
                        <h1>{item.responsibilities}</h1>
                        <h1>{item.startDate}</h1>
                        <h1>{item.endDate}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CvPreview;
