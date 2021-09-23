import React from 'react';
import cn from 'classnames'
import s from "./index.module.scss"
import {useSelector} from "react-redux";
import {GetSelectedItemId} from "../../store/selectors/table";

interface Props {
	onRowClick?: () => void
	id?: number
}

const Row: React.FC<Props> = ({children, onRowClick, id}) => {

	const activeId = useSelector(GetSelectedItemId)

	return (
		<div className={activeId === id ? cn(s.row, s.active) : s.row} onClick={onRowClick}>
			{children}
		</div>
	);
};

export default Row;