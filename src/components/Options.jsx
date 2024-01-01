/* eslint-disable no-mixed-spaces-and-tabs,react/prop-types */
// noinspection EqualityComparisonWithCoercionJS

export const Options = ({question, userAnswer, dispatch}) => {
	function addBgColour(curIdx, correctIdx) {
		if (userAnswer == -1)
			return 'bg-gray-300'
		
		else {
			if (curIdx == correctIdx)
				return 'bg-green-400'
			else if (curIdx == userAnswer && userAnswer != correctIdx)
				return 'bg-red-400'
			else
				return 'bg-gray-700'
		}
	}
	
	return (
		<>
			<div className='mt-4 flex w-1/2 flex-col gap-y-3'>
				{question.options.map((x, idx) =>
					<button className={`rounded-md ${addBgColour(idx, question.correctOption)} px-2 py-2 text-gray-800 enabled:hover:bg-gray-400`}
					        key={x}
					        onClick={() => dispatch({'type': 'answered', 'payload': idx})}
					        disabled={userAnswer != -1}>
						{x}
					</button>)}
			</div>
		</>
	)
}