import {useEffect} from 'react'
import { useHistory, useLocation } from 'react-router'
import {useState} from 'react'

// Redux
import {useDispatch, useSelector} from 'react-redux'

// Reducers functions
import {getAllUsers, login} from '../redux/userReducer'

// Components
import SelectUser from './../components/SelectUser'

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
        
        <div>
            {loading === "loading" ? <p>Loading</p>:
                <form onSubmit={onSubmit}>
                    <SelectUser allUsers={allUsers} loading={loading} onChange={onChange}/>
                    <br/>
                    <input type="submit" value="Login" />
                </form>
            }
        </div>

    )
}

export default Login;