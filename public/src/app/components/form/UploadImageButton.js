import React from 'react'
import Button from 'react-bootstrap/Button';

function UploadImageButton(props) {
    const handleClick = (selectedLocation) => {
        console.log("clicked")
    }
    return (
        <Button onClick={handleClick}
                style={{width: "250px", margin: "10px"}}
                variant="outline-primary">
            Upload Image
        </Button>
    );
}

export default UploadImageButton;
