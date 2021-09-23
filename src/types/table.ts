import {Item} from "./types";

export enum UserActionTypes {
	ADD_ITEM = 'ADD_ITEM',
	REMOVE_ITEM = 'REMOVE_ITEM',
	SAVE_ITEMS = 'SAVE_ITEMS',
	SET_NEW_ITEM_ID = 'SET_NEW_ITEM_ID',
	SET_SELECTED_ITEM_ID = 'SET_SELECTED_ITEM_ID',
	SET_ERROR = 'SET_ERROR'
}

export interface RemoveItemAction {
	type: UserActionTypes.REMOVE_ITEM,
	payload: number
}

export interface AddItemAction {
	type: UserActionTypes.ADD_ITEM,
	payload: Item
}

export interface SetErrorAction {
	type: UserActionTypes.SET_ERROR,
	payload: boolean
}

export interface SaveItemsAction {
	type: UserActionTypes.SAVE_ITEMS,
	payload: Item[]

}

export interface SetNewItemIdAction {
	type: UserActionTypes.SET_NEW_ITEM_ID,
	payload: number
}

export interface SetSelectedItemIdAction {
	type: UserActionTypes.SET_SELECTED_ITEM_ID,
	payload: number
}

export type UserAction =
	RemoveItemAction
	| AddItemAction
	| SaveItemsAction
	| SetNewItemIdAction
	| SetSelectedItemIdAction
	| SetErrorAction

export type UserState = {
	items: Item[],
	newItemId: number,
	selectedItemId: number | null
	isError: boolean
}

