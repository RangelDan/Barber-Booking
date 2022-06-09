import Link from "next/link";
import { useState } from "react";
import { haircuts, openTimes } from '../../data/dropdownData'
import Dropdown from "../../layout/Dropdown";
import SharedButton from "../../layout/SharedButton";
import TextField from "../../layout/TextField";

export default function Home() {
    const [resData, setResData] = useState({});


    const onResChange = (e) => {
        setResData({...resData, [e.target.id]: e.target.value })
    }

    const submitRes = async () => {
        const resInfo = {
            clientName: resData.clientName,
            haircut: resData.haircut,
            date: resData.date,
            time: resData.time
        }
        const response = await fetch('/api/reservations', {
            method: 'POST',
            body: JSON.stringify({ resInfo }),
            headers: {
                "Content-Type": "application/json"
            },
        })
    }

    return (
        <div>
            <h2>Book your date</h2>
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