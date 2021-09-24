export type Item = {
  id: number;
  name: string;
  temperature: number;
  discoveryDate: string;
  visible: boolean;
  sort: number;
};

export enum InputTypes {
  text = 'text',
  number = 'number',
  date = 'date',
  checkbox = 'checkbox',
}

export enum SelectTypes {
  select = 'select-one',
}
