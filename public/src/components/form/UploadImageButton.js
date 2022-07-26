import React, {useRef} from 'react'
import Button from 'react-bootstrap/Button';
import {useDispatch} from "react-redux";
import {FORM_ACTION_TYPE} from "../../store/actions/form";

function UploadImageButton() {
    const fileUpload = useRef();
    const filePathText = useRef();
    const storeDispatch = useDispatch();
    const handleButtonClick = () => {
        fileUpload.current.click();
    }

    function setFilePathText(imageFiles) {
        let filePathTexts = "";
        for (let i = 0; i < imageFiles.length; i++) {
            filePathTexts = filePathTexts + "</br>" + imageFiles[i].name;
        }
        console.log(filePathTexts)
        filePathText.current.innerHTML = filePathTexts;
    }

    const handleOnInput = (inputElement) => {
        const imageFiles = inputElement.target.files;
        setFilePathText(imageFiles)
        storeDispatch({type: FORM_ACTION_TYPE.SET_IMAGES, payload: imageFiles});
    }
    return (
        <>
            <span ref={filePathText}></span>
            <Button onClick={handleButtonClick}
                    style={{width: "250px", margin: "10px"}}
                    variant="outline-primary">
                Upload Image
            </Button>
            <input style={{display: "none"}} ref={fileUpload} type="file" id="myfile" accept="image/*" name="myfile"
                   onInput={handleOnInput} multiple/>
        </>
    );
}

export default UploadImageButton;
