import React from 'react';
import s from './index.module.scss';

const Cell: React.FC = ({ children }) => <div className={s.cell}>{children}</div>;

export default Cell;
