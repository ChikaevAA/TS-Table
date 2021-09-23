import React from 'react'

import s from './index.module.scss'

const Loader: React.FC = () => {
	return (
		<div className={s.loader}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}

export default Loader