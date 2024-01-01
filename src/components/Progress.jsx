/* eslint-disable no-mixed-spaces-and-tabs,react/prop-types */
// noinspection EqualityComparisonWithCoercionJS

export const Progress = ({curIdx, numQuestions, points}) => {
	const width = `w-[${Math.round((curIdx) / numQuestions * 100)}%]`
	// const possible = [...Array(numQuestions).keys()].map(x => `w-[${Math.round((x + 1) / numQuestions * 100)}%]`)
	const _ = ['w-[0%]', 'w-[7%]', 'w-[13%]', 'w-[20%]', 'w-[27%]', 'w-[33%]', 'w-[40%]', 'w-[47%]', 'w-[53%]', 'w-[60%]', 'w-[67%]', 'w-[73%]', 'w-[80%]', 'w-[87%]', 'w-[93%]', 'w-[100%]']
	
	return (
		<>
			<div className='p-1 bg-gray-400 rounded-md w-full mb-2'>
				<div className={`${width} h-2 rounded-sm transition-all duration-[1000ms] bg-gray-600`}></div>
			</div>
			<div className='mb-10 flex w-full justify-between self-start'>
				<p>
					<span className='text-[13px] text-gray-400'>Question </span>
					{curIdx + 1}/{numQuestions}
				</p>
				<p>
					{points}
					<span className='text-gray-400 text-[13px]'> Points</span>
				</p>
			</div>
		</>
	)
}