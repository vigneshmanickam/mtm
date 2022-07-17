import React from 'react'
import TextArea from "./TextArea";
import {useDispatch} from "react-redux";
import {FORM_ACTION_TYPE} from "../../store/actions/form";

function IssueDetailText() {
    const storeDispatch = useDispatch();
    const handleOnInput = (e) => {
        storeDispatch({type: FORM_ACTION_TYPE.SET_ISSUE, payload: e.target.value});
    }
    return (
        <TextArea title="Issue Details" onInput={handleOnInput}/>
    );
}

export default IssueDetailText;
