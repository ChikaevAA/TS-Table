import {combineReducers} from "redux";
import {tableReducer} from "./table"
import {modalReducer} from "./modal";


export const rootReducer = combineReducers({
	table: tableReducer,
	modal: modalReducer
})

export type RootState = ReturnType<typeof rootReducer>