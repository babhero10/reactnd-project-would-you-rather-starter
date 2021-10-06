import {useState} from 'react';
import { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import {getQuestions} from './../redux/QuestionsReducer'

// Components
import UnAnsweredQuestions from '../components/UnAnsweredQuestions';
import AnsweredQuestions from '../components/AnswerQuestions';
import Loading from '../components/Loading';

function Home() {
    const [answered, setAnswered] = useState(false)
    const loadingQuestions = useSelector(state => state.questions.loadingQuestions)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getQuestions());
    }, [dispatch])

    function onSwitchUnanswered() {
        setAnswered(false)
    }
    function onSwitchAnswered() {
        setAnswered(true)
    }

    return (
        <div className="container">
            {loadingQuestions === "loading" ? <Loading />:
                <div className="home-container">
                    <div className="home-controller">
                        <button className={`btn ${answered ? "" : "active-btn"}`} onClick={onSwitchUnanswered}>Unanswered Questions</button>
                        <button className={`btn ${!answered ? "" : "active-btn"}`} onClick={onSwitchAnswered}>Answered Questions</button>
                    </div>
                    {answered ? <AnsweredQuestions /> : <UnAnsweredQuestions />}
                </div>
            }
        </div>
    )
}

export default Home;