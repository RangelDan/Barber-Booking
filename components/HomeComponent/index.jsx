import Link from "next/link";
import { useState } from "react";
import { haircuts, openTimes } from '../../data/dropdownData'
import Dropdown from "../../layout/Dropdown";
import SharedButton from "../../layout/SharedButton";
import TextField from "../../layout/TextField";
import styles from "../HomeComponent/index.module.scss";
// import validate from ""

export default function Home() {
    const [resData, setResData] = useState({})
    const [allRes, setAllRes] = useState()
    // TODO: ERROR STATE
    // const [errs, setErrs] = useState(false)

    // const getRes = async () => {
    //     const response = await fetch('/api/reservations')
    //     const data = await response.json()
    //     setAllRes(data)
    //     return data;
    // }
    
    const onResChange = (e) => {
        setResData({...resData, [e.target.id]: e.target.value })
    }

    // const validateDateTime = ( resDate, resTime ) => {
    //     const reservations = getRes()
    //     console.log(reservations)
    //     for(let i=0; i<reservations.length; i++)
    //         if(reservations[i].date === resDate && reservations[i].time === resTime) {
    //             setErrs(true)
    //             console.log('NICE, ERRORS')
    //         }
    //         console.log('CLEEEAANNN')
    // }

    const submitRes = async () => {
        const resInfo = {
            clientName: resData.clientName,
            haircut: resData.haircut,
            date: resData.date,
            time: resData.time
        }

        // TODO: ADD VALIDATION
        // validateDateTime(resInfo.date, resInfo.time) 
        const response = await fetch('/api/reservations', {
            method: 'POST',
            body: JSON.stringify({ resInfo }),
            headers: {
                "Content-Type": "application/json"
            },
        })
    }

    return (
        <div className={styles.home}>
            <h1>Book your date</h1>
            <TextField 
                id='clientName'
                type='text'
                label='Name' 
                placeholder='Enter your name' 
                onChange={onResChange}
                value={resData.name}
            />
            <Dropdown 
                id='haircut'
                label='Style' 
                onChange={onResChange}
                options={haircuts}
            />
            <TextField 
                id='date'
                type='date'
                label='Date' 
                placeholder='Choose a date'
                onChange={onResChange}
                value={resData.date}
            />
            <Dropdown 
                id='time'
                label='Time' 
                onChange={onResChange}
                options={openTimes}
            />
            <div>
                <SharedButton 
                    content='Reserve'
                    onclick={submitRes}
                />
                <Link href='/bookings'>TO RESERVATIONS</Link>
            </div>
            
        </div>
    )
}