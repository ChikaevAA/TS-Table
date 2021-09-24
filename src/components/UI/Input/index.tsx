import React from 'react';

import s from './index.module.scss';

interface Props {
  dataType: string;
  dataValue: string | number;
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement>, id?: number) => void;
}

const Input: React.FC<Props> = ({ dataType, dataValue, onInputChange }) => (
  <input className={s.input} type={dataType} value={dataValue} onChange={onInputChange} />
);

Input.defaultProps = {
  onInputChange: undefined,
};

export default Input;
