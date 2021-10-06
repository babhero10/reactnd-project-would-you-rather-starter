import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getQuestions} from './../redux/QuestionsReducer'

import Poll from './../components/Poll'
import ViewPoll from '../components/ViewPoll'
import Loading from '../components/Loading'

function Question() {
    const dispatch = useDispatch()
    const questions = useSelector(state => state.questions.questions)
    const loadingQuestions = useSelector(state => state.questions.loadingQuestions)
    const questionId = useParams().id

    const currentUser = useSelector(state => state.users.currentUser)
    const [poll, setPoll] = useState(true);

    useEffect(() => {
        if (questions.length === 0) {
            dispatch(getQuestions());
        }
    }, [dispatch, questions])
    
    useEffect(() => {
        if (questions.length !== 0) {
            if (questions[questionId].optionOne.votes.includes(currentUser.id) || questions[questionId].optionTwo.votes.includes(currentUser.id)) {
                setPoll(false);
            }
        }
    }, [questions, currentUser, questionId])

    return (
        <div className="container">
            {loadingQuestions === "loading" ? <Loading />
            : poll === true ?
             <Poll question={questions[questionId]} user={currentUser.id} changePollState={setPoll}/>
            :<ViewPoll question={questions[questionId]} user={currentUser} />
            }
        </div>
    )
}

export default Question
