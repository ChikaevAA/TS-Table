import React from 'react';

interface Props {
	dataValue: boolean,
	onCheckboxChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox: React.FC<Props> = ({dataValue, onCheckboxChange}) => {
	return <input type="checkbox" checked={dataValue} onChange={onCheckboxChange}/>
};

export default Checkbox;