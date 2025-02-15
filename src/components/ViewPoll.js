import {useSelector} from 'react-redux';
import Loading from './Loading'

function ViewPoll({question, user}) {
    const allUsers = useSelector(state => state.users.allUsers)
    const loading = useSelector(state => state.questions.loadingQuestions)
    const votesOfOne = question.optionOne.votes.length;
    const votesOfTwo = question.optionTwo.votes.length;
    const totalVotes = votesOfOne + votesOfTwo;

    return (
        <div>
        {loading === "loading" ? <Loading />: 
        <div className="home-container">
            <div className="question">

                <div className="question-author-name">
                    {allUsers[question.author].name}
                </div>
                <div className="question-body">
                    <img className="avatar-large" src={allUsers[question.author].avatarURL} alt={allUsers[question.author].name} />
                    <div className="question-text">
                        <p>Would you rather... </p>

                        <div className={`vote-result ${user.answers[question.id] === "optionOne" ? "vote-result-selected" : ""} `}>
                            <p>{question.optionOne.text}</p>
                            <div className='progress'>
                                <div className='bar' style={{width: `${votesOfOne/totalVotes*100}%`}}>
                                    <div className='progress-text'>{Math.round(10*votesOfOne/totalVotes*100)/10}% Completed</div>
                                </div>
                            </div>
                            <p>{votesOfOne} of {totalVotes}</p>
                        </div>
                    
                        <div className={`vote-result ${user.answers[question.id] === "optionTwo" ? "vote-result-selected" : ""} `}>
                            <p>{question.optionTwo.text}</p>
                            <div className='progress'>
                                <div className='bar' style={{width: `${votesOfTwo/totalVotes*100}%`}}>
                                    <div className='progress-text'>{Math.round(10*votesOfTwo/totalVotes*100)/10}% Completed</div>
                                </div>
                            </div>
                            <p>{votesOfTwo} of {totalVotes}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    }
    </div>
   )

}

export default ViewPoll;