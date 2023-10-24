import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ page, user, children }) {
    console.log(user(), page)
    switch (page) {
        case "login":
            if (user() != null) {
                return <Navigate to="/" replace />
            }
            break;

        case "payment":
            if (user() == null) {
                return <Navigate to="/" replace />
            }
            break;
        case "profile":
            if (user() == null) {
                return <Navigate to="/" replace />
            }
            break;
        // default:
    }
    return children
}