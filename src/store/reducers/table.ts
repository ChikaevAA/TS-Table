import {UserAction, UserActionTypes, UserState} from "../../types/table";

const initialState: UserState = {
	items: [],
	newItemId: 0,
	isError: false,
	selectedItemId: null
}

export const tableReducer = (state = initialState, action: UserAction): UserState => {
	switch (action.type as string) {
		case UserActionTypes.SET_NEW_ITEM_ID:
			return {...state, newItemId: action.payload} as UserState
		case UserActionTypes.ADD_ITEM:
			return {...state, items: [...state.items, action.payload]} as UserState
		case UserActionTypes.SAVE_ITEMS:
			return {...state, items: action.payload, selectedItemId: null} as UserState
		case UserActionTypes.SET_ERROR:
			return {...state, isError: action.payload} as UserState
		case UserActionTypes.REMOVE_ITEM:
			return {...state, items: state.items.filter((item) => item.id !== action.payload), selectedItemId: null} as UserState
		case UserActionTypes.SET_SELECTED_ITEM_ID:
			return {...state, selectedItemId: action.payload} as UserState
		default:
			return state
	}
}