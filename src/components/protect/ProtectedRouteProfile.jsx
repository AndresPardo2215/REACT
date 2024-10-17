import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, logged, loginRoute }) => {
    if (!logged && !loginRoute) {
        alert("You must be logged in. Redirecting to login...");
        return <Navigate to="/login" />;
    } 
    if (logged && loginRoute) {
        alert("You are already logged in. Redirecting to home...");
        return <Navigate to="/" />;
    }

    // If none of the conditions match, render the children
    return children;
};


export default ProtectedRoute;