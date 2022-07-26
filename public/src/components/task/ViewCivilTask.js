import React, {useEffect, useState} from 'react'
import {getParamValue} from "../../utils/utils";
import {getSpecificCivilTask} from "../../utils/api";
import MyImageViewer from "./MyImageViewer";
import ViewTaskData from "./ViewTaskData";

const style = {
    overflow: "auto",
    width: "100%",
    padding: "0",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    margin: "0",
};

const buttonStyle = {
    "display": "block",
    "width": "100%",
    "textAlign": "center",
    "padding": "10px"
}

const ViewCivilTask = () => {
    const taskId = getParamValue("taskid")
    const [taskData, setTaskData] = useState(undefined)
    useEffect(() => {
        getSpecificCivilTask(taskId, (response) => {
            console.log(response)
            setTaskData(response)
        }, (err) => {
            console.log(err)
        })
    }, [])
    if (taskData) {
        return (
            <div style={style}>
                <MyImageViewer images={taskData.images}/>
                <ViewTaskData taskData={taskData}/>
                <div style={buttonStyle}>
                    <button onClick={()=>{
                        window.print();
                    }}>Print</button>
                </div>

            </div>
        )
    } else {
        return <h1>No data</h1>
    }

}

export default ViewCivilTask
