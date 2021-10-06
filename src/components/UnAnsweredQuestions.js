import { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import {getUnAnsweredQuestions} from './../redux/QuestionsReducer'

// Components
import QuestionCard from './QuestionCard';

function UnAnsweredQuestions() {

    const unAnswered = useSelector(state => state.questions.unAnswered)
    const currentUser = useSelector(state => state.users.currentUser)

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getUnAnsweredQuestions(currentUser))   
    }, [dispatch, currentUser])
    
    return (
        <div>
            {unAnswered?.map((unAnsweredQuestion, index) => {
                return <QuestionCard key={index} questionInfo={unAnsweredQuestion} />
            })}
        </div>
    )
}

export default UnAnsweredQuestions;