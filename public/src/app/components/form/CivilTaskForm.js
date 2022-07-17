import React from 'react'
import ZoneDropDown from "./ZoneDropDown";
import LocationDropDown from "./LocationDropDown";
import TextArea from "./TextArea";
import UploadImageButton from "./UploadImageButton";
import SaveTaskButton from "./SaveTaskButton";
import IssueDetailText from "./IssueDetailText";
import SolutionText from "./SolutionText";

const style = {
    overflow: "auto",
    width: "100%",
    padding: "20px",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
};
const CivilTaskForm = () => {
    return (
        <div style={style}>
            <h2 style={{textAlign: "center"}}>Kanha Mosquito<br></br> Control Department</h2>
            <ZoneDropDown/>
            <LocationDropDown/>
            <IssueDetailText/>
            <SolutionText/>
            <UploadImageButton/>
            <SaveTaskButton/>
        </div>
    )
}

export default CivilTaskForm
