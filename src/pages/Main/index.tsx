import React, {useEffect} from 'react';
import {useActions} from "../../hooks/useActions";

import s from "./index.module.scss"

import Table from "../../components/Table"
import Form from "../../components/Form";
import Modal from "../../components/Modal";
import {headers} from "../../variables/headers";
import {items} from "../../variables/items";

const Main: React.FC = () => {

	const {initializeItems} = useActions()

	useEffect(() => {
		initializeItems(items)
	}, [initializeItems])

	return (
		<div className={s.root}>
			<Table headers={headers}/>
			<Modal>
				<Form/>
			</Modal>
		</div>
	);
};

export default Main;