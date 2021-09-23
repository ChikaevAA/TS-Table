import * as TableActions from "../actions/table"
import * as ModalActions from "../actions/modal"

export const rootActions = {
	...TableActions,
	...ModalActions
}