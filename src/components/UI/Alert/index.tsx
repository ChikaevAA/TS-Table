import React from 'react';
import cn from 'classnames'
import s from "./index.module.scss";

const Alert: React.FC = ({children}) => {
	return (
		<div className={cn(s.alert, s.alert_danger)} role="alert">
			{children}
		</div>
	);
};

export default Alert;