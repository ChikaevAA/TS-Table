import {Item} from "../../types/types";
import {
	AddItemAction, RemoveItemAction,
	SaveItemsAction,
	SetNewItemIdAction,
	SetSelectedItemIdAction,
	UserActionTypes
} from "../../types/table";
import {Dispatch} from "redux";
import isEqual from "../../utils/isEqual";

export const addItem = (item: Item): AddItemAction => {
	return {
		type: UserActionTypes.ADD_ITEM,
		payload: item
	}
}

export const saveItems = (items: Item[]): SaveItemsAction => {
	return {
		type: UserActionTypes.SAVE_ITEMS,
		payload: items
	}
}

export const saveItemsControl = (items: Item[]) => {
	return (dispatch: Dispatch) => {
		const localItems = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')!) : null
		if (!isEqual(localItems, items)) {
			dispatch(saveItems(items))
			localStorage.setItem('items', JSON.stringify(items))
		}

	}
}

export const removeItem = (id: number): RemoveItemAction => {
	return {
		type: UserActionTypes.REMOVE_ITEM,
		payload: id
	}
}

export const removeItemControl = (id: number | null) => {
	return async (dispatch: Dispatch) => {
		if (id === null) {
			dispatch(setIsError(true))
			setTimeout(() => dispatch(setIsError(false)), 3000)
			return
		}
		dispatch(removeItem(id))
	}
}

export const initializeItems = (items: Item[]) => {
	return (dispatch: Dispatch) => {
		const localItems = localStorage.getItem('items')
		if (!localItems) {
			localStorage.setItem('items', JSON.stringify(items))
		}
		const targetItems = localItems ? JSON.parse(localItems) : items
		const id = targetItems[targetItems.length - 1].id + 1
		dispatch(saveItems(targetItems))
		dispatch(setNewItemId(id))
	}
}

export const setIsError = (value: boolean) => {
	return {
		type: UserActionTypes.SET_ERROR,
		payload: value
	}
}

export const setNewItemId = (id: number): SetNewItemIdAction => {
	return {
		type: UserActionTypes.SET_NEW_ITEM_ID,
		payload: id
	}
}

export const setSelectedItemId = (id: number): SetSelectedItemIdAction => {
	return {
		type: UserActionTypes.SET_SELECTED_ITEM_ID,
		payload: id
	}
}



