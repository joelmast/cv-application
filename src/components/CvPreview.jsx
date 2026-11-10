// import GeneralInfo from "./components/GeneralInfo";
// import Education from "./components/Education";
// import Experience from "./components/Experience";

function CvPreview({ generalInfo, educationInfo }) {
    return (
        <div className="cvPreview-div">
            <div className="general-info-preview">
                <h1>{generalInfo.name}</h1>
                <h1>{generalInfo.email}</h1>
                <h1>{generalInfo.phone}</h1>
            </div>

            <div className="education-info-preview">
                {educationInfo.map((item) => (
                    <div className="education-item" key={item.id}>
                        <h1>{item.schoolName}</h1>
                        <h1>{item.studyTitle}</h1>
                        <h1>{item.studyDate}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CvPreview;
