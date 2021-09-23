import React, {useEffect, useState} from 'react';
import {inputTypes, Item, selectTypes} from "../../types/types";

import s from './index.module.scss'

import Row from "../Row";
import Header from "../Header";
import Cell from "../Cell";
import Input from "../UI/Input";
import Select from "../UI/Select";
import Checkbox from "../UI/Checkbox";
import Button from "../UI/Button";
import Controls from "../Controls";
import {useActions} from "../../hooks/useActions";
import {GetIsError, GetItems, GetSelectedItemId} from "../../store/selectors/table";
import {useSelector} from "react-redux";
import Alert from "../UI/Alert";


interface Props {
	headers: string[],
}

const Table: React.FC<Props> = ({headers}) => {

		const items = useSelector(GetItems)
		const isError = useSelector(GetIsError)

		const SelectedItemId = useSelector(GetSelectedItemId)

		const {saveItemsControl, setSelectedItemId, removeItemControl, toggleModal} = useActions()

		const [tableItems, setTableItems] = useState<Item[]>(items)

		useEffect(() => {
			setTableItems(items)
		}, [items])

		const inputHandlers = {
			[inputTypes.text]: (e: React.ChangeEvent<HTMLInputElement>, id: number) => changeInputHandler("name", e, id),
			[inputTypes.number]: (e: React.ChangeEvent<HTMLInputElement>, id: number) => changeInputHandler("temperature", e, id),
			[inputTypes.date]: (e: React.ChangeEvent<HTMLInputElement>, id: number) => changeInputHandler("discoveryDate", e, id),
			[inputTypes.checkbox]: (e: React.ChangeEvent<HTMLInputElement>, id: number) => changeInputHandler("visible", e, id),
		}

		const selectHandlers = {
			[selectTypes.select]: (e: React.ChangeEvent<HTMLSelectElement>, id: number) => changeSelectHandler("sort", e, id),
		}

		const changeInputHandler = (key: string, e: React.ChangeEvent<HTMLInputElement>, id: number) => {
			const targetEvent = e.target
			const value = key === "visible" ? targetEvent.checked : targetEvent.value
			const targetValue = key === "temperature" ? +value : value;

			return setTableItems(tableItems.map((el) => el.id === id ? {...el, [key]: targetValue} : el))
		}

		const changeSelectHandler = (key: string, e: React.ChangeEvent<HTMLSelectElement>, id: number) => {
			const targetEvent = e.target
			const targetValue = targetEvent.value

			return setTableItems(tableItems.map((el) => el.id === id ? {...el, [key]: targetValue} : el))
		}

		const handleInput = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
			inputHandlers[e.target.type as keyof typeof inputHandlers](e, id)
		}

		const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>, id: number) => {
			selectHandlers[e.target.type as keyof typeof selectHandlers](e, id)
		}

		const rowContent = (itemData: Item) => {
			const {name, temperature, discoveryDate, visible, sort, id} = itemData
			return (
				<>
					<Cell>
						<Input
							dataType={inputTypes.text}
							dataValue={name}
							onInputChange={(e) => handleInput(e, id)}
						/>
					</Cell>
					<Cell>
						<Input
							dataType={inputTypes.number}
							dataValue={temperature}
							onInputChange={(e) => handleInput(e, id)}
						/>
					</Cell>
					<Cell>
						<Input
							dataType={inputTypes.date}
							dataValue={discoveryDate}
							onInputChange={(e) => handleInput(e, id)}
						/>
					</Cell>
					<Cell>
						<Checkbox
							dataValue={visible}
							onCheckboxChange={(e) => handleInput(e, id)}
						/>
					</Cell>
					<Cell>
						<Select
							dataValue={sort}
							onSelectChange={(e) => handleSelect(e, id)}
						/>
					</Cell>
				</>

			)
		}

		const tableControls = (
			<Controls align='left'>
				<Button styleType='success' onButtonClick={toggleModal}>Добавить</Button>
				<Button styleType='primary' onButtonClick={() => saveItemsControl(tableItems)}>Сохранить</Button>
				<Button styleType='danger' onButtonClick={() => removeItemControl(SelectedItemId)}>Удалить</Button>
			</Controls>
		)

		return (
			<div className={s.table}>
				<Header items={headers}/>
				{
					tableItems.map((tableItem) => {
						return (
							<Row key={tableItem.id} id={tableItem.id} onRowClick={() => setSelectedItemId(tableItem.id)}>
								{rowContent(tableItem)}
							</Row>
						)
					})
				}
				{
					isError
					&&
					<Alert>Ошибка! Не выбран элемент для удаления</Alert>
				}
				{tableControls}

			</div>
		);
	}
;

export default Table;