import axios from "axios";
import {REQUEST_METHOD} from "./constants";

export const createNewCivilTask = (requestBody, successFunction, failureFunction) => {
    makeAuthorizedServerRequest("/newciviltask", REQUEST_METHOD.POST, requestBody, successFunction, failureFunction)
}

export const getSpecificCivilTask = (taskId, successFunction, failureFunction) => {
    makeAuthorizedServerRequest("/getciviltask/" + taskId, REQUEST_METHOD.POST, {}, successFunction, failureFunction)
}

export const getCivilTasks = (successFunction, failureFunction) => {
    makeAuthorizedServerRequest("/getciviltasks", REQUEST_METHOD.POST, {}, successFunction, failureFunction)
}


const makeAuthorizedServerRequest = (requestURL, requestMethod, requestBody, successCallBackFunction, failureCallBackFunction, authToken) => {
    const requestConfiguration = {
        method: requestMethod,
        url: requestURL,
        data: requestBody,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    axios(requestConfiguration)
        .then(
            function (serverResponse) {
                successCallBackFunction(serverResponse.data, serverResponse.status)
            }
        )
        .catch(function (err) {
            console.log(err)
            failureCallBackFunction(err.response)
        })
};
