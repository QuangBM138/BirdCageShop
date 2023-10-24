import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ user, children }) {
    if (user() != null) {
        return <Navigate to="/" replace />
    }
    return children
}
