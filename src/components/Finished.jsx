/* eslint-disable no-mixed-spaces-and-tabs,react/prop-types */
// noinspection EqualityComparisonWithCoercionJS

export const Finished = ({points, dispatch}) => {
	return (
		<>
			<p className='mx-auto mt-8 rounded-md bg-gray-300 px-4 py-1 text-gray-800'>
				You scored {points} points
			</p>
			<button className='mx-auto mt-8 self-end rounded-md bg-gray-100 px-4 py-1 text-gray-800 hover:bg-gray-400'
			        onClick={() => dispatch({'type': 'restartQuiz'})}>Restart
			</button>
		</>
	)
}