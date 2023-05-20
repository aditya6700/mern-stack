import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'

export default function Home() {

    const [userData, setUserData] = useState({});
    const [show, setShow] = useState(false);

    const getData = async () => {
        try {
            const res = await axios.get('/api/getdata', {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            
            console.log(res.data);
            setUserData(res.data);
            setShow(true);
        }
        catch (err) {
            console.log(err.response);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
    <>
        <Navbar />
        <section className="home ">
        
        <div className="home-content d-flex flex-column justify-content-center align-items-center">
            <h2 className="title">Welcome {show ? userData.username : "User"}</h2>
            <p className="welcome fs-4">Good to know that you are {show ? userData.work : "here"}</p>
        </div>
        </section>
    </>
    )
}
