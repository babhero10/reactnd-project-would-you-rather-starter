function UserScoreCard({user}) {
    const answered = Object.keys(user.answers).length;
    const created = user.questions.length
    const totalScore = answered + created;
    return (
        <div className="user-score-card question" style={{alignItems: "center"}}>
            <img className="avatar-large" src={user.avatarURL} alt={user.name} />
            <div>
                <p>Answered: {answered}</p>
                <p>Created: {created}</p>
                <p>Score: {totalScore}</p>
            <br />
            </div>
        </div>
    )    
}

export default UserScoreCard;