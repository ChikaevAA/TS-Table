import React from 'react';
import {Provider} from "react-redux";

import store from "../store";

export const WithRedux = <Props, >(Component: React.FC<Props>) => {
	return (props: Props) => {
		return (
			<Provider store={store}>
				<Component {...props} />
			</Provider>
		);
	};
};