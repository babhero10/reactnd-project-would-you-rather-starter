import {Link, useHistory} from 'react-router-dom'

import {useSelector} from 'react-redux'

function Header({activePage}) {
    const currentUser = useSelector(state => state.users.currentUser)
    const history = useHistory();

    function onLogout() {
        history.push('/Login')
    }

    return (
        <div>
            <header>
                <ul>
                    <li><Link className={activePage==="/" ? 'active' : ""} to='/'>Home</Link></li>
                    <li><Link className={activePage==="/add" ? 'active' : ""} to='/add'>New Question</Link></li>
                    <li><Link className={activePage==="/leaderboard" ? 'active' : ""} to='/leaderboard'>Leaderboard</Link></li>
                </ul>
                <div className="user-header">
                    <img className="avatar" src={currentUser.avatarURL} alt={currentUser.name} />
                    <span>{currentUser.name}</span>
                    <button className="btn" onClick={onLogout}>Logout</button>
                </div>
            </header>
        

        </div>
    )
}

export default Header;