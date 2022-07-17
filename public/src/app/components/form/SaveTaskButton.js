import React from 'react'
import Button from 'react-bootstrap/Button';
import {useSelector} from "react-redux";
import {createNewCivilTask} from "../../utils/api";

function SaveTaskButton(props) {
    const formData = useSelector((state) => state.form);

    const handleClick = () => {
        delete formData.zoneIndex
        console.log(formData);
        createNewCivilTask(JSON.stringify({task: formData}),
            (response) => {
                if(response.result){
                    console.log("saved")
                }
            },
            (err) => {
                console.log(err)
            })
    }
    return (
        <Button onClick={handleClick}
                variant="primary"
                style={{width: "250px", marginTop: "50px"}}>
            Submit
        </Button>
    );
}

export default SaveTaskButton;
