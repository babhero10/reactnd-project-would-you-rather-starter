import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react'
import {saveQuestionAnswer, getQuestions} from './../redux/QuestionsReducer'
import {getAllUsers} from './../redux/userReducer'

function Poll({question, user, changePollState}) {
    const allUsers = useSelector(state => state.users.allUsers)

    const [option, setOption] = useState("")
    const dispatch = useDispatch();

    function onChange(e) {
        setOption(e.target.value);
    }

    function onPoll(e) {
        e.preventDefault()
        if (option !== "") {
            const data = {authedUser: user, qid: question.id, answer: option}
            dispatch(saveQuestionAnswer(data));
            
            // For refresh state
            dispatch(getQuestions());
            dispatch(getAllUsers())

            changePollState(false)
        }
    }

    return (
        <div className="home-container">
            <div className="question">
                <div className="question-author-name">
                    {allUsers[question.author].name}
                </div>
                <div className="question-body">
                    <img className="avatar-large" src={allUsers[question.author].avatarURL} alt={allUsers[question.author].name} />
                    <div className="question-text">
                        <p>Would you rather... </p>

                        <div>
                            <input type="radio" name="opinion" value="optionOne" id="optionOne" onChange={onChange}/>
                            <label htmlFor="optionOne">{question.optionOne.text}</label>
                        </div>
                    
                        <div>
                            <input type="radio" name="opinion" value="optionTwo" id="optionTwo" onChange={onChange}/>
                            <label htmlFor="optionTwo">{question.optionTwo.text}</label>
                        </div>
                        
                        <button className="btn full-width" onClick={onPoll}>Submit</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Poll;