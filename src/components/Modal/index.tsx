import React from 'react';
import cn from 'classnames'

import s from './index.module.scss'
import {useSelector} from "react-redux";
import {GetModalState} from "../../store/selectors/modal";
import {useActions} from "../../hooks/useActions";


const Modal: React.FC = ({children}) => {
	const active = useSelector(GetModalState)
	const {toggleModal} = useActions()

	return (
		<div className={active ? cn(s.active, s.modal) : s.modal} onClick={toggleModal}>
			<div className={active ? cn(s.modal__content, s.active) : s.modal__content}
				 onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};

export default Modal;