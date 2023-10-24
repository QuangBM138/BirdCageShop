import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'


export default function UseToken() {
    const [cookies, setCookie, removeCookie] = useCookies(['user']);

    const getToken = () => {
        const userToken = cookies.user ?? null
        return userToken
    }

    const setToken = (token) => {
        setCookie("user", token)
    }
    const removeToken = () => {
        removeCookie("user")
    }
    return {
        setToken,
        getToken,
        removeToken

    }
}
