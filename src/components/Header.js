import {Link, useHistory} from 'react-router-dom'

import {logout} from './../redux/userReducer'
import {useDispatch, useSelector} from 'react-redux'

function Header() {

    const currentUser = useSelector(state => state.users.currentUser)
    const dispatch = useDispatch()
    const history = useHistory();

    function onLogout() {
        dispatch(logout);
        history.push('/Login')
    }

    return (
        <div>
           
            <header>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/add'>NewQuestion</Link></li>
                    <li><Link to='/leaderboard'>Leaderboard</Link></li>
                </ul>
                <div className="user-header">
                    <img className="avatar" src={currentUser.avatarURL} alt={currentUser.name} />
                    <span>{currentUser.name}</span>
                    <button onClick={onLogout}>Logout</button>
                </div>
            </header>
        

        </div>
    )
}

export default Header;