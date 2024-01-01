/* eslint-disable no-mixed-spaces-and-tabs,react/prop-types */
// noinspection EqualityComparisonWithCoercionJS

import {useEffect, useReducer} from 'react'
import {Header} from './components/Header.jsx';
import {Main} from './components/Main.jsx';
import {Error} from './components/Error.jsx';
import {Loading} from './components/Loading.jsx';
import {Start} from './components/Start.jsx';
import {Questions} from './components/Questions.jsx';
import {Button} from './components/Button.jsx';
import {Progress} from './components/Progress.jsx';
import {Finished} from './components/Finished.jsx';

const initialState = {'questions': [], 'status': 'loading', 'curIdx': 0, 'userAnswer': -1, 'points': 0}

function reducer(state, {type, payload}) {
	if (type == 'quesFetchSuccess')
		return {...state, 'questions': payload.questions, 'status': 'ready'}
	
	if (type == 'quesFetchFailed')
		return {...state, 'questions': [], 'status': 'error'}
	
	if (type == 'quizStart')
		return {...state, 'status': 'active'}
	
	if (type == 'answered') {
		const curQues = state.questions[state.curIdx]
		const newPoints = curQues.correctOption == payload ? curQues.points : 0
		
		return {...state, 'userAnswer': payload, 'points': state.points + newPoints}
	}
	
	if (type == 'nextQues')
		return {...state, 'curIdx': state.curIdx + 1, 'userAnswer': -1}
	
	if (type == 'finished')
		return {...state, 'userAnswer': -1, 'status': 'finished'}
	
	if (type == 'restartQuiz')
		return {...state, 'status': 'ready', 'curIdx': 0, 'userAnswer': -1, 'points': 0}
}

function App() {
	const [{questions, status, curIdx, userAnswer, points}, dispatch] = useReducer(reducer, initialState, undefined)
	
	useEffect(() => {
		const fetchQuestions = async () => {
			let res = await fetch('https://api.stockemy.in/prod/oms/get_data/strike_selection?option=CE')
			
			if (res.status != 200)
				dispatch({'type': 'quesFetchFailed', 'payload': []})
			else
				dispatch({'type': 'quesFetchSuccess', 'payload': await res.json()})
		}
		
		fetchQuestions().then()
	}, [])
	
	return (
		<>
			<div className='mx-auto flex w-96 flex-col'>
				<Header></Header>
				<Main>
					{status == 'error' &&
						<Error></Error>}
					{status == 'loading' &&
						<Loading></Loading>}
					{status == 'ready' &&
						<Start dispatch={dispatch} numQues={questions.length}></Start>}
					{status == 'active' &&
						<>
							<Progress curIdx={curIdx} numQuestions={questions.length} points={points}></Progress>
							<Questions dispatch={dispatch} question={questions[curIdx]} userAnswer={userAnswer}></Questions>
						</>}
					{userAnswer != -1 && status == 'active' &&
						<Button dispatch={dispatch} curIdx={curIdx} questions={questions}></Button>}
					{status == 'finished' &&
						<Finished points={points} dispatch={dispatch}></Finished>}
				</Main>
			</div>
		</>
	)
}

export default App
