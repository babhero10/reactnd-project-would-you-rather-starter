import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react'
import {createQuestion} from './../redux/QuestionsReducer'
import { useHistory } from 'react-router';
import { getAllUsers } from '../redux/userReducer';

function CreateQuestion() {
    const currentUser = useSelector(state => state.users.currentUser)

    const [optionOne, setOptionOne] = useState("")
    const [optionTwo, setOptionTwo] = useState("")
    const dispatch = useDispatch();
    
    const history = useHistory()

    function onChange(e) {
        if (e.target.name === "optionOne"){ 
            setOptionOne(e.target.value)
        } else if (e.target.name === "optionTwo") {
            setOptionTwo(e.target.value)
        }
    }

    function onSubmit(e) {
        e.preventDefault()
        if (optionOne !== "" && optionTwo !== "" && optionOne !== optionTwo) {
            const questionFormat = { optionOneText: optionOne, optionTwoText: optionTwo, author: currentUser.id }
            dispatch(createQuestion(questionFormat))
            dispatch(getAllUsers()) // Refresh users
            history.push('/')
        }
    }

    return (
        <div className="container">
            <div className="home-container">
                <p>Would You Rather?</p>
                <form className="create-question" onSubmit={onSubmit}>
                    <input className="input full-width" placeholder="Option One" type="text" name="optionOne" onChange={onChange}/>
                    <p>OR</p>
                    <input className="input full-width" placeholder="Option Two" type="text" name="optionTwo" onChange={onChange}/>
                    
                    <input className="btn full-width" type="submit" value="Create" />
                </form>
            </div>
        </div>
    )
}

export default CreateQuestion;