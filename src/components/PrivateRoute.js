import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux'

import Header from './../components/Header';

function PrivateRoute({children,...rest}) {
    const user = useSelector(state => state.users.currentUser)
    
    function authenticate() {
        if (Object.keys(user).length !== 0) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <Route {...rest} render={({location}) => {
            return authenticate() === true ? 
            <div><Header/> {children}</div>
            : <Redirect to={{
                pathname: '/login',
                state: {from: location}
            }}/>
        }}/>
    )
}

export default PrivateRoute;