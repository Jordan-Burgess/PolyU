import { Route, Navigate } from "react-router-dom";
import { useContext } from 'react';
import AuthContext from "../components/Auth";

const PrivateRoute = ({ children, ...rest }) => {
    let { user } = useContext(AuthContext)
    return <Route {...rest}>{!user ? <Navigate to="/" /> : children}</Route>
}

export default PrivateRoute;