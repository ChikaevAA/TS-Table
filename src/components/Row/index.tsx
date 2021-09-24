import React from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import s from './index.module.scss';
import { GetSelectedItemId } from '../../store/selectors/table';

interface Props {
  onRowClick?: () => void;
  id?: number;
}

const Row: React.FC<Props> = ({ children, onRowClick, id }) => {
  const activeId = useSelector(GetSelectedItemId);

  return (
    <div className={activeId === id ? cn(s.row, s.active) : s.row} onClick={onRowClick} role="presentation">
      {children}
    </div>
  );
};

export default Row;
