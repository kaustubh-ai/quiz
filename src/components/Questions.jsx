/* eslint-disable no-mixed-spaces-and-tabs,react/prop-types */
// noinspection EqualityComparisonWithCoercionJS

import {Options} from './Options.jsx';

export const Questions = ({question, dispatch, userAnswer}) => {
	return (
		<>
			<h1>{question.question}</h1>
			<Options question={question} dispatch={dispatch} userAnswer={userAnswer}></Options>
		</>
	)
}