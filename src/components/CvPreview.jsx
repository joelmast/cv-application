// import GeneralInfo from "./components/GeneralInfo";
// import Education from "./components/Education";
// import Experience from "./components/Experience";

function CvPreview({ generalInfo }) {
    return (
        <div className="cvPreview-div">
            <h1>{generalInfo.name}</h1>
            <h1>{generalInfo.email}</h1>
            <h1>{generalInfo.phone}</h1>
        </div>
    );
}

export default CvPreview;
