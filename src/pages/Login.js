import {useEffect} from 'react'
import { useHistory, useLocation } from 'react-router'
import {useState} from 'react'

// Redux
import {useDispatch, useSelector} from 'react-redux'

// Reducers functions
import {getAllUsers, login} from '../redux/userReducer'

// Components
import SelectUser from './../components/SelectUser'
import Loading from '../components/Loading'

function Login() {    
    
    const allUsers = useSelector(state => state.users.allUsers)
    const loading = useSelector(state => state.users.loading)
    const dispatch = useDispatch()
    
    const history = useHistory();
    const {state} = useLocation()

    const [selectedUser, setSelectedUser] = useState("")
    
    // Get all users
    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    function onChange(e) {
        setSelectedUser(e.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        dispatch(login(allUsers[selectedUser]));
        history.push(state?.from || '/')
    }

    return (
        
        <div className="container">
            {loading === "loading" ? <Loading />:
                <form onSubmit={onSubmit} style={{width: "100%"}} className="login">
                    <SelectUser allUsers={allUsers} loading={loading} onChange={onChange}/>
                    <br/>
                    <input className="btn full-width" type="submit" value="Login" />
                </form>
            }
        </div>

    )
}

export default Login;