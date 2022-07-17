import React from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import {FORM_ACTION_TYPE} from "../../store/actions/form";
import {useDispatch, useSelector} from "react-redux"
import {locations, zones} from "../../utils/constants";

const LocationDropDown = () => {
    const storeDispatch = useDispatch();
    const formData = useSelector((state) => state.form)
    const locationList = formData.zoneIndex ? locations[formData.zoneIndex] : undefined;
    const handleSelection = (selectedLocation) => {
        storeDispatch({type: FORM_ACTION_TYPE.SET_LOCATION, payload: locationList[selectedLocation]});
    }
    return (
        <Dropdown onSelect={handleSelection}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {formData.location ? formData.location : "Select Location"}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {locationList ? locationList.map((location, i) => {
                    return <Dropdown.Item key={i} eventKey={i}>{location}</Dropdown.Item>;
                }) : null}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default LocationDropDown
