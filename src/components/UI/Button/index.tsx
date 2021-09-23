import React from 'react';
import cn from 'classnames'

import s from './index.module.scss'

type ButtonType = "button" | "submit" | "reset" | undefined

interface Props {
	styleType: string,
	onButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
	buttonType?: ButtonType,
}

const Button: React.FC<Props> = ({children, styleType, onButtonClick, buttonType}) => {
	return <button type={buttonType} className={cn(s.button, s[styleType])} onClick={onButtonClick}>{children}</button>
};

export default Button;