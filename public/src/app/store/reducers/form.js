import {FORM_ACTION_TYPE} from "../actions/form";

const initialState = {
    zoneIndex: undefined,
    zone: undefined,
    location: undefined,
    reportedBy: "Anand",
    issue: undefined,
    solution: undefined,
    images: []
};

export default function form(state = initialState, action) {
    switch (action.type) {
        case FORM_ACTION_TYPE.SET_ZONE:
            return {
                ...state,
                zone: action.payload.zone,
                zoneIndex: action.payload.zoneIndex
            }
        case FORM_ACTION_TYPE.SET_LOCATION:
            return {
                ...state,
                location: action.payload
            }
        case FORM_ACTION_TYPE.SET_REPORTED_BY:
            return {
                ...state,
                reportedBy: action.payload
            }
        case FORM_ACTION_TYPE.SET_ISSUE:
            return {
                ...state,
                issue: action.payload
            }
        case FORM_ACTION_TYPE.SET_SOLUTION:
            return {
                ...state,
                solution: action.payload
            }
        case FORM_ACTION_TYPE.SET_IMAGES:
            return {
                ...state,
                images: action.payload
            }
        default:
            return state;
    }
}
