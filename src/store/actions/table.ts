import { Dispatch } from 'redux';
import { Item } from '../../types/types';
import { AddItemAction, RemoveItemAction, SaveItemsAction, SetNewItemIdAction, SetSelectedItemIdAction, UserActionTypes } from '../../types/table';
import isEqual from '../../utils/isEqual';
import { getItems } from '../../utils/getItems';

export const addItem = (item: Item): AddItemAction => ({
  type: UserActionTypes.ADD_ITEM,
  payload: item,
});

export const saveItems = (items: Item[]): SaveItemsAction => ({
  type: UserActionTypes.SAVE_ITEMS,
  payload: items,
});

export const saveItemsControl = (items: Item[]) => (dispatch: Dispatch) => {
  const targetItems = getItems<Item[]>('items', items);
  if (!isEqual<Item[]>(targetItems, items)) {
    dispatch(saveItems(items));
    localStorage.setItem('items', JSON.stringify(items));
    return;
  }
  dispatch(saveItems(items));
};

export const removeItem = (id: number): RemoveItemAction => ({
  type: UserActionTypes.REMOVE_ITEM,
  payload: id,
});

export const removeItemControl = (id: number | null) => async (dispatch: Dispatch) => {
  if (id === null) {
    dispatch(setIsError(true));
    setTimeout(() => dispatch(setIsError(false)), 3000);
    return;
  }
  dispatch(removeItem(id));
};

export const initializeItems = (items: Item[]) => (dispatch: Dispatch) => {
  const targetItems = getItems<Item[]>('items', items);
  const id = targetItems[targetItems.length - 1].id + 1;
  dispatch(saveItems(targetItems));
  dispatch(setNewItemId(id));
};

export const setIsError = (value: boolean) => ({
  type: UserActionTypes.SET_ERROR,
  payload: value,
});

export const setNewItemId = (id: number): SetNewItemIdAction => ({
  type: UserActionTypes.SET_NEW_ITEM_ID,
  payload: id,
});

export const setSelectedItemId = (id: number): SetSelectedItemIdAction => ({
  type: UserActionTypes.SET_SELECTED_ITEM_ID,
  payload: id,
});
