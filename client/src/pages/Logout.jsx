import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../App';

export default function Logut() {

    const { state, dispatch } = useContext(userContext);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/api/logout', {
            withCredentials: true,
            "Accept": "application/json",
            "Content-Type": "application/json"
        })
            .then((res) => {
                
                dispatch({
                    type: 'USER',
                    payload: false
                });

                navigate('/login', { replace: true });
                if (res.status !== 200) {
                    throw new Error(res.error);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    })

    return (
        <>
                
        </>
    )
}
