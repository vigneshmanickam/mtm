import {combineReducers, createStore} from "redux"
import form from "./reducers/form"
import dashboard from "./reducers/dashboard";

const rootStore = createStore(combineReducers({form, dashboard}))

export default rootStore
