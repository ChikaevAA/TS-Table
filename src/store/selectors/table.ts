import {RootState} from "../reducers/root";

export const GetNewItemId = (state: RootState) => state.table.newItemId

export const GetSelectedItemId = (state: RootState) => state.table.selectedItemId

export const GetItems = (state: RootState) => state.table.items

export const GetIsError = (state: RootState) => state.table.isError


