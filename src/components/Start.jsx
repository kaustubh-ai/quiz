/* eslint-disable no-mixed-spaces-and-tabs,react/prop-types */
// noinspection EqualityComparisonWithCoercionJS

export const Start = ({className, numQues, dispatch}) => {
	return (
		<div>
			<h1 className={`text-2xl text-gray-200 text-center ${className}`}>Let&apos;s start the quiz, aight?</h1>
			<button className='mt-4 rounded-md bg-gray-300 px-2 py-1 text-gray-800'
			        onClick={() => dispatch({'type': 'quizStart'})}>Start {numQues} questions
			</button>
		</div>
	)
}