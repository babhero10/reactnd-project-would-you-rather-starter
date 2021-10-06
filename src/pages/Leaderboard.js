import {useSelector} from 'react-redux'
import UserScoreCard from './../components/UserScoreCard';

function Leaderboard() {
    const allUsers = useSelector(state => state.users.allUsers)

    return (
        <div className="container">
            <div className="home-container">
                {Object.keys(allUsers)
                .sort((userId1 , userId2) => -Object.keys(allUsers[userId1].answers).length - allUsers[userId1].questions.length + Object.keys(allUsers[userId2].answers).length + allUsers[userId2].questions.length)
                .map(userId => <UserScoreCard key={userId} user={allUsers[userId]}/>)}
            </div>
        </div>
    )

}

export default Leaderboard;