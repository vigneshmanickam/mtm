import React, {useState, useCallback} from 'react';

const textContainerStyle = {padding: "5px"};
const textTitleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
}
const textDataStyle = {
    marginLeft: "10px",
    fontSize: "20px",
    width: "200px",
    textAlign: "justify"
}
function ViewTaskData(props) {

    return (
        <div style={{width: "100%"}}>
            <div style={textContainerStyle}>
                <span style={textTitleStyle}> {"Zone :"}</span>
                <span style={textDataStyle}> {props.taskData.zone}</span>
            </div>
            <div style={textContainerStyle}>
                <span style={textTitleStyle}> {"Location :"}</span>
                <span style={textDataStyle}> {props.taskData.location}</span>
            </div>
            <div style={textContainerStyle}>
                <span style={textTitleStyle}> {"Reported By :"}</span>
                <span style={textDataStyle}> {props.taskData.reportedBy}</span>
            </div>
            <div style={textContainerStyle}>
                <span style={textTitleStyle}> {"Issue :"}</span>
                <br></br>
                <span style={textDataStyle}> {props.taskData.issue}</span>
            </div>
            <div style={textContainerStyle}>
                <span style={textTitleStyle}> {"Suggested Solution :"}</span>
                <br></br>
                <span style={textDataStyle}> {props.taskData.solution}</span>
            </div>
        </div>
    );
}

export default ViewTaskData
