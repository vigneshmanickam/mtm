const taskModel = require('../model/taskModel');
const express = require('express');
const routesAPI = express();
const constants = require("../controller/constants");
const mongoose = require("mongoose");

routesAPI.post('/newciviltask', function (req, res) {
    if (req.body && req.body.task) {
        let newTask = new taskModel(req.body.task);
        newTask.save(function (err) {
            if (err) {
                console.error(err);
                res.sendStatus(REQUEST_FAILED);
            } else {
                res.send({result: true});
            }
        });
    } else {
        res.sendStatus(REQUEST_FAILED);
    }
});

routesAPI.post('/getciviltask/:taskId', function (req, res) {
    const taskId = req.params.taskId;
    if (req.params && taskId && mongoose.Types.ObjectId.isValid(taskId)) {
        taskModel.findOne({
            _id: taskId
        }, function (err, responseData) {
            if (err) {
                console.error(err);
                res.sendStatus(REQUEST_FAILED);
            } else {
                if (responseData != null) {
                    res.send(responseData);
                } else {
                    res.send(JSON.stringify({result: false}))
                }
            }
        }).lean()
    } else {
        res.sendStatus(REQUEST_FAILED);
    }
});

routesAPI.post('/getciviltasks', function (req, res) {
    taskModel.find({}, function (err, responseData) {
        if (err) {
            console.error(err);
            res.sendStatus(REQUEST_FAILED);
        } else {
            if (responseData != null) {
                res.send({result: responseData});
            } else {
                res.send(JSON.stringify({result: false}))
            }
        }
    }).lean()
});


module.exports = {routesAPI};
