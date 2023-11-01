import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export default function ProtectedRoute({ page, user, children }) {
    const { state } = useLocation()
    console.log(state?.previousPath);
    switch (page) {
        case "login":
            if (user() != null) {
                if (state?.previousPath) { return <Navigate to={state.previousPath} /> }
                else { return <Navigate to="/" replace /> }

            }
            break;

        case "payment":
            if (user() == null) {
                return <Navigate to="/login" replace />
            }
        case "profile":
            if (user() == null) {
                return <Navigate to="/login" replace />
            }
            break;
        // default:
    }
    return children
}