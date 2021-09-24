export enum ModalActionTypes {
  TOGGLE_MODAL = 'TOGGLE_MODAL',
}

interface ToggleModalAction {
  type: ModalActionTypes.TOGGLE_MODAL;
}

export type ModalAction = ToggleModalAction;

export type ModalState = {
  modalState: boolean;
};
