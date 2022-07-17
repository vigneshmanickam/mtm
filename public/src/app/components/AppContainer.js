import React, {useState} from 'react'
import {PAGE_TYPE} from "../utils/constants";
import CivilTaskForm from "./form/CivilTaskForm";
import ViewCivilTask from "./ViewCivilTask";
import '../css/app.css'
import Dashboard from "./dashboard/Dashboard";


const AppContainer = (props) => {
    const [pageType, setPageType] = useState(props.pageType);

    function getCurrentPage(pageType) {
        switch (pageType) {
            case PAGE_TYPE.CIVIL_TASK_FORM:
                return <CivilTaskForm/>
            case PAGE_TYPE.VIEW_CIVIL_TASK:
                return <ViewCivilTask/>
            case PAGE_TYPE.DASHBOARD:
                return <Dashboard/>

        }
    }

    return (
        <React.Fragment>
            {getCurrentPage(pageType)}
        </React.Fragment>)
}

export default AppContainer
