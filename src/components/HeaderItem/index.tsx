import React from 'react';

import styles from './index.module.scss'

const HeaderItem: React.FC = ({children}) => {
	return (
		<div className={styles.header}>
			{children}
		</div>
	);
};

export default HeaderItem;