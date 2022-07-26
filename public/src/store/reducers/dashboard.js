import {FORM_ACTION_TYPE} from "../actions/form";
import {DASHBOARD_ACTION_TYPE} from "../actions/dashboard";

const initialState = {
    civilTasks: []
};

export default function dashboard(state = initialState, action) {
    switch (action.type) {
        case DASHBOARD_ACTION_TYPE.SET_CIVIL_TASKS:
            return {
                ...state,
                civilTasks: action.payload
            }
        default:
            return state;
    }
}
