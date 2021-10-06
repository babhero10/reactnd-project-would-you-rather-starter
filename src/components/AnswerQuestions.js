import { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import {getAnsweredQuestions} from './../redux/QuestionsReducer'

// Components
import QuestionCard from './QuestionCard';

function AnsweredQuestions() {

    const answered = useSelector(state => state.questions.answered)
    const currentUser = useSelector(state => state.users.currentUser)

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getAnsweredQuestions(currentUser))   
    }, [dispatch, currentUser])
    
    return (
        <div>
            {answered?.map((answeredQuestion, index) => {
                return <QuestionCard key={index} questionInfo={answeredQuestion} />
            })}
        </div>
    )
}

export default AnsweredQuestions;