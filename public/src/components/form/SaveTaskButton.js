import React from 'react'
import Button from 'react-bootstrap/Button';
import {useSelector} from "react-redux";
import {createNewCivilTask} from "../../utils/api";
import {uploadFile} from "../../utils/aws";

function SaveTaskButton() {
    const formData = useSelector((state) => state.form);
    const uploadImages = (images) => {
        const imageURLList = [];

        for (let i = 0; i < images.length; i++) {
            const successFunction = (response) => {
                imageURLList.push(response.Location);
                if (i === images.length - 1) {
                    createTask(imageURLList)
                }
            };
            uploadFile(images[i], successFunction)
        }
    }

    const createTask = (imageURLList) => {
        formData.images = imageURLList;
        console.log(formData)
        createNewCivilTask(JSON.stringify({task: formData}),
            (response) => {
                if (response.result) {
                    console.log(response.result._id)
                }
            },
            (err) => {
                console.log(err)
            })
    }
    const handleClick = () => {
        delete formData.zoneIndex
        uploadImages(formData.images)
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
