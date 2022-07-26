import React, {useState, useCallback} from 'react';

function MyImageViewer(props) {
    const images = props.images
    const imageStyle = {
        height: "350px",
        objectFit: "cover",
        width: "100%"
    }
    if (images) {
        if (images.length > 1 && images.length <= 2) {
            imageStyle.width = "50%"
        } else if (images.length > 2) {
            imageStyle.width = "50%"
            imageStyle.height = "200px"
        }
    }
    return (images && images.length > 0) ? (
        <div style={{width: "100%"}}>
            {images[0] ? <img style={imageStyle} crossOrigin="anonymous" src={images[0].replace("https", "http")}/> : null}
            {images[1] ? <img style={imageStyle} crossOrigin="anonymous" src={images[1].replace("https", "http")}/> : null}
            {images[2] ? <img style={imageStyle} crossOrigin="anonymous" src={images[2].replace("https", "http")}/> : null}
            {images[3] ? <img style={imageStyle} crossOrigin="anonymous" src={images[3].replace("https", "http")}/> : null}
        </div>
    ) : null
}

export default MyImageViewer
