import {ModalAction, ModalActionTypes, modalState} from "../../types/modal";

const initialState: modalState = {
	modalState: false
}

export const modalReducer = (state = initialState, action: ModalAction) => {
	switch (action.type as string) {
		case ModalActionTypes.TOGGLE_MODAL:
			return {...state, modalState: !state.modalState}
		default:
			return state
	}
}