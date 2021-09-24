import { ModalAction, ModalActionTypes, ModalState } from '../../types/modal';

const initialState: ModalState = {
  modalState: false,
};

export const modalReducer = (state = initialState, action: ModalAction) => {
  switch (action.type as string) {
    case ModalActionTypes.TOGGLE_MODAL:
      return { ...state, modalState: !state.modalState };
    default:
      return state;
  }
};
