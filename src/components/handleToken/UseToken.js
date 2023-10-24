import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom';


export default function UseToken() {
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    console.log(cookies)
    const getToken = () => {
        const userToken = cookies.user ?? null
        return userToken
    }

    const setToken = (token) => {
        setCookie("user", token)
    }
    const removeToken = () => {
        removeCookie("user")
        // navigate('/login')
    }
    return {
        setToken,
        getToken,
        removeToken

    }
}
