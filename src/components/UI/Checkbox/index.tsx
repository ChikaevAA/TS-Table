import React from 'react';

interface Props {
  dataValue: boolean;
  onCheckboxChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<Props> = ({ dataValue, onCheckboxChange = undefined }) => <input type="checkbox" checked={dataValue} onChange={onCheckboxChange} />;

export default Checkbox;
