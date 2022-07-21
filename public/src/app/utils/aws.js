const AWS = require('aws-sdk/global');
let s3 = require('aws-sdk/clients/s3');
const albumBucketName = "hfnit";
const bucketRegion = "ap-south-1";
const IdentityPoolId = "ap-south-1:de526654-94cd-4a33-812a-73698deed1c6";

const AWS_IMAGE_PATH = process.env.ENV_AWS_IMAGE_PATH || "mtm-images";

export const AWS_FOLDER_NAMES = {
    IMAGES_FOLDER: AWS_IMAGE_PATH
};


AWS.config.update({
    region: bucketRegion,
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: IdentityPoolId
    })
});

s3 = new AWS.S3({
    apiVersion: "2006-03-01",
    params: {Bucket: albumBucketName}
});

export function uploadFile(file, successFunction, failureFunction) {
    let fileName;
    try {
        fileName = setFileName(file);
        const albumPhotosKey = AWS_FOLDER_NAMES.IMAGES_FOLDER + "/";
        const photoKey = albumPhotosKey + fileName;
        // To upload file to AWS server
        const upload = new AWS.S3.ManagedUpload({
            params: {
                Bucket: albumBucketName,
                Key: photoKey,
                Body: file,
                ACL: "public-read"
            }
        });
        const promise = upload.promise();
        promise.then(
            function (data) {
                successFunction(data);
                // alert("Successfully uploaded photo.");
            },
            function (err) {
                failureFunction();
                console.log(err);
            }
        );
    } catch (e) {
        console.log(e)
    }
}

export function deletePhoto(folder, imageName, successFunction) {
    const imageKey = folder + '/' + imageName;

    //To delete object from AWS server.
    s3.deleteObject({Key: imageKey}, (err) => {
        if (err) {
            return alert("There was an error deleting your photo: ", err.message);
        }
        successFunction();
    });
}

function setFileName(file, targetFileName = null) {
    // If targetFileName is NOT null, a Logo is being saved.
    // We don't rename the Logo file. Example format "rjeyakumar92@gmail.com_logo.png".
    const millies = new Date().getTime();
    let newName = targetFileName === null ? "sh_" + millies : targetFileName;

    switch (file.type) {
        case 'application/json':
            newName = file.name;
            break;
        case 'image/png':
            newName = newName + '.png';
            break;
        case 'image/jpg':
            newName = newName + '.jpg';
            break;
        case 'image/jpeg':
            newName = newName + '.jpg';
            break;
        default:
            // This is a non-image File So use the extension that came with the File.
            newName = newName + file.name.substr(file.name.lastIndexOf('.'))
    }

    return newName;
}
