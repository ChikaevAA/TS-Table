import React from 'react';

import s from './index.module.scss'

interface Props {
	dataValue: number,
	onSelectChange?: (e: React.ChangeEvent<HTMLSelectElement>, id?: number) => void
}

const Select: React.FC<Props> = ({dataValue, onSelectChange}) => {
	return (
		<select className={s.select} value={dataValue} onChange={onSelectChange}>
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
	);
};

export default Select;