import React, {memo} from 'react';

import s from './index.module.scss'
import HeaderItem from "../HeaderItem";

interface Props {
	items: string[]
}

const Header: React.FC<Props> = ({items}) => {
	return (
		<div className={s.header}>
			{
				items.map(headerName => (
						<HeaderItem key={headerName}>
							{headerName}
						</HeaderItem>
					)
				)
			}
		</div>
	);
};

export default memo(Header);