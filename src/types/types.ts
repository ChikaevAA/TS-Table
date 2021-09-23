export type Item = {
	id: number,
	name: string,
	temperature: number,
	discoveryDate: string,
	visible: boolean,
	sort: number
}

export enum inputTypes {
	text = 'text',
	number = 'number',
	date = 'date',
	checkbox = 'checkbox',
}

export enum selectTypes {
	select = 'select-one'
}



