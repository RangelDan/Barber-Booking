import { useState } from "react";
import Dropdown from "../../layout/Dropdown";
import SharedButton from "../../layout/SharedButton";
import TextField from "../../layout/TextField";

export default function Home() {
    const [resData, setResData] = useState({});
    const hairStyles = [' ', 'Fade', 'Mohawk', 'Taper', 'Combover', 'Shaved']
    // TODO: MOVE BELOW TO WON FILE AND CONDITIONALLY RENDER
    const times = [
        ' ', 
        '10:00',
        '10:30',
        '11:00',
        '11:30',
        '12:00',
        '12:30',
        '01:00',
        '01:30',
        '02:00',
        '02:30',
        '03:00',
        '03:30',
        '04:00',
        '04:30',
        '05:00',
        '05:30',
        '06:00',
        '06:30',
        '07:00'
    ]

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
    const getRes = async () => {
        const response = await fetch('/api/reservations')
        const data = await response.json()
        console.log(JSON.stringify(data))
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
                options={hairStyles}
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
                options={times}
            />
            <div>
                <SharedButton 
                    content='Reserve'
                    onclick={submitRes}
                />
                <SharedButton 
                    content='See Reservations'
                    onclick={getRes}
                />
            </div>
            
        </div>
    )
}