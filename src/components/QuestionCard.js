import {useSelector} from 'react-redux';

import {Link} from 'react-router-dom'

function QuestionCard({questionInfo}) {

    const allUsers = useSelector(state => state.users.allUsers)

    return (
        <div className="question">
            <div className="question-author-name">
                {allUsers[questionInfo.author].name}
            </div>
            <div className="question-body">
                <img className="avatar-large" src={allUsers[questionInfo.author].avatarURL} alt={allUsers[questionInfo.author].name} />
                <div className="question-text">
                    <p>Would you rather?</p>
                    <p>{questionInfo.optionOne.text} or ...</p>
                    <Link className="btn full-width" to={`/question/${questionInfo.id}`}>view poll</Link>
                </div>
            </div>
        </div>
    )
}

export default QuestionCard;