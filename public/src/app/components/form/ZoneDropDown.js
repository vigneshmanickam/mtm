import React from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import {FORM_ACTION_TYPE} from "../../store/actions/form";
import {useDispatch, useSelector} from "react-redux"
import {zones} from "../../utils/constants";
import style from "../../css/dropdown.css"

const ZoneDropDown = () => {
    const storeDispatch = useDispatch();
    const zone = useSelector((state) => state.form.zone)
    const handleSelection = (selectedZoneIndex) => {
        const zoneData = {zone: zones[selectedZoneIndex], zoneIndex: selectedZoneIndex}
        storeDispatch({type: FORM_ACTION_TYPE.SET_ZONE, payload: zoneData});
        storeDispatch({type: FORM_ACTION_TYPE.SET_LOCATION, payload: undefined});
    }
    return (
        <Dropdown onSelect={handleSelection}>
            <Dropdown.Toggle variant="success" id="dropdown-basic" style={style.dropDownButton}>
                {zone ? zone : "Select Zone"}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {zones.map((zone, i) => {
                    return <Dropdown.Item key={i} eventKey={i}>{zone}</Dropdown.Item>;
                })}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default ZoneDropDown
