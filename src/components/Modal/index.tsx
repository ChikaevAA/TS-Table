import React from 'react';
import cn from 'classnames';

import { useSelector } from 'react-redux';
import s from './index.module.scss';
import { GetModalState } from '../../store/selectors/modal';
import { useActions } from '../../hooks/useActions';

const Modal: React.FC = ({ children }) => {
  const active = useSelector(GetModalState);
  const { toggleModal } = useActions();

  return (
    <div role="presentation" className={active ? cn(s.active, s.modal) : s.modal} onClick={toggleModal}>
      <div
        className={active ? cn(s.modal__content, s.active) : s.modal__content}
        role="presentation"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
