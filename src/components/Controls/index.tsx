import React from 'react';
import cn from 'classnames';

import s from './index.module.scss';

interface Props {
  align: string;
}

const Controls: React.FC<Props> = ({ children, align }) => <div className={cn(s.controls, s[align])}>{children}</div>;

export default Controls;
