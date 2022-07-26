import React, {useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {getCivilTasks} from "../../utils/api";
import {useDispatch, useSelector} from "react-redux";
import {DASHBOARD_ACTION_TYPE} from "../../store/actions/dashboard";

function Dashboard() {
    const storeDispatch = useDispatch();
    const civilTasks = useSelector((state) => state.dashboard.civilTasks)
    useEffect(() => {
        getCivilTasks((response) => {
                console.log(response)
                storeDispatch({type: DASHBOARD_ACTION_TYPE.SET_CIVIL_TASKS, payload: response.result});
                console.log("Save...")
            },
            (err) => {
                console.log(err)
            })
    }, [civilTasks.length])
    return (
        <div style={{marginTop: "30px"}}>
            <h2 style={{textAlign: "center"}}>Dashboard</h2>
            {civilTasks.length > 0 ?
                civilTasks.map((task, index) => {
                    return (
                        <Card key={index} style={{margin: "10px"}}>
                            <Card.Body>
                                <Card.Title>{task.issue}</Card.Title>
                                <Card.Text>
                                    {task.reported_by}
                                </Card.Text>
                                <Button variant="primary">View Task</Button>
                            </Card.Body>
                        </Card>)
                }) : null}
        </div>
    );
}

export default Dashboard;
