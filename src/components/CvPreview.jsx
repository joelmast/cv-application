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
                <h1>{educationInfo.schoolName}</h1>
                <h1>{educationInfo.studyTitle}</h1>
                <h1>{educationInfo.studyDate}</h1>
            </div>
        </div>
    );
}

export default CvPreview;
