import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';
import { GetNewItemId } from '../../store/selectors/table';
import { InputTypes, Item, SelectTypes } from '../../types/types';

import s from './index.module.scss';

import Button from '../UI/Button';
import Controls from '../Controls';
import Input from '../UI/Input';
import Checkbox from '../UI/Checkbox';
import Select from '../UI/Select';
import Row from '../Row';
import Cell from '../Cell';
import { formInitialItem } from '../../variables/formInitialItem';

const Form: React.FC = () => {
  const { addItem, toggleModal, setNewItemId } = useActions();

  const newItemId = useSelector(GetNewItemId);

  const [item, setItem] = useState<Item>(formInitialItem);

  const inputHandlers = {
    [InputTypes.text]: (e: React.ChangeEvent<HTMLInputElement>) => changeInputHandler('name', e),
    [InputTypes.number]: (e: React.ChangeEvent<HTMLInputElement>) => changeInputHandler('temperature', e),
    [InputTypes.date]: (e: React.ChangeEvent<HTMLInputElement>) => changeInputHandler('discoveryDate', e),
    [InputTypes.checkbox]: (e: React.ChangeEvent<HTMLInputElement>) => changeInputHandler('visible', e),
  };

  const selectHandlers = {
    [SelectTypes.select]: (e: React.ChangeEvent<HTMLSelectElement>) => changeSelectHandler('sort', e),
  };

  const changeInputHandler = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const targetEvent = e.target;
    const value = key === 'visible' ? targetEvent.checked : targetEvent.value;
    const targetValue = key === 'temperature' ? +value : value;

    return setItem(prevState => ({ ...prevState, [key]: targetValue }));
  };

  const changeSelectHandler = (key: string, e: React.ChangeEvent<HTMLSelectElement>) => {
    const targetEvent = e.target;
    const targetValue = targetEvent.value;

    return setItem(prevState => ({ ...prevState, [key]: targetValue }));
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputHandlers[e.target.type as keyof typeof inputHandlers](e);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    selectHandlers[e.target.type as keyof typeof selectHandlers](e);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newItem = {
      ...item,
      id: newItemId,
    };
    addItem(newItem);
    setNewItemId(newItemId + 1);
    setItem(formInitialItem);
    toggleModal();
  };

  return (
    <form className={s.form} onSubmit={handleFormSubmit} onReset={toggleModal}>
      <Row>
        <Cell>
          <Input dataType={InputTypes.text} dataValue={item.name} onInputChange={e => handleInput(e)} />
        </Cell>
        <Cell>
          <Input dataType={InputTypes.number} dataValue={item.temperature} onInputChange={e => handleInput(e)} />
        </Cell>
        <Cell>
          <Input dataType={InputTypes.date} dataValue={item.discoveryDate} onInputChange={e => handleInput(e)} />
        </Cell>
        <Cell>
          <Checkbox dataValue={item.visible} onCheckboxChange={e => handleInput(e)} />
        </Cell>
        <Cell>
          <Select dataValue={item.sort} onSelectChange={e => handleSelect(e)} />
        </Cell>
      </Row>

      <Controls align="center">
        <Button styleType="success" buttonType="submit">
          Добавить
        </Button>
        <Button styleType="danger" buttonType="reset">
          Отменить
        </Button>
      </Controls>
    </form>
  );
};

export default Form;
