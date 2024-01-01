/* eslint-disable no-mixed-spaces-and-tabs,react/prop-types */
// noinspection EqualityComparisonWithCoercionJS

export const Button = ({curIdx, dispatch, questions}) => {
	let [buttonText, type] = ['', '']
	
	if (curIdx == questions.length - 1) {
		buttonText = 'Finish'
		type = 'finished'
	}
	else {
		buttonText = 'Next'
		type = 'nextQues'
	}
	
	return (
		<div className='mt-8 mr-24 self-end rounded-md bg-gray-300 px-4 py-1 text-gray-800 hover:bg-gray-400'>
			<button onClick={() => dispatch({'type': type})}>{buttonText} &rarr;</button>
		</div>
	)
}