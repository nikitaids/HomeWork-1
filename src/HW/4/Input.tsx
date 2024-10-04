import {ChangeEvent, ChangeEventHandler} from "react";

type InputPropsType = {
	currentText: string // НУЖНО ПРОТИПИЗИРОВАТЬ
	setCurrentText: (currentText:string)=>void // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = (props: InputPropsType) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		props.setCurrentText(event.currentTarget.value)
		console.log('change')
	};

	 return (
	   <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler}/>
	 )
};
