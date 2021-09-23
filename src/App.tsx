import React from "react";
import Main from "./pages/Main";
import {compose} from "redux";
import {WithRedux} from "./hoc/withRedux";

const App: React.FC = () => {
	return (
		<Main/>
	);
}

const withAppData = (Component: React.FC): React.FC =>
	compose<React.FC>(WithRedux)(Component)


export default withAppData(App);
