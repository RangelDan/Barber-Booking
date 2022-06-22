import { useState } from "react";
import { haircuts, openTimes } from '../../data/dropdownData'
import Dropdown from "../../layout/Dropdown";
import SharedButton from "../../layout/SharedButton";
import TextField from "../../layout/TextField";
import Wrapper from "../../layout/Wrapper"
import { validate } from "./validate";
import s from "../HomeComponent/index.module.scss"

export default function Home() {
    const [resData, setResData] = useState({})
    const [allRes, setAllRes] = useState()
    // TODO: ERROR STATE
    const [errs, setErrs] = useState()
    
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
        if (validate(resInfo) == false) {
            return false
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
        if (response.ok) {
            console.log("SUCCESS")
        }
    }

    return (
        <div className={s.bg}>
            <Wrapper>
                <h1>Reserve</h1>
                <form> 
                    {/* <Form onResChange={onResChange} resData={resData}/> */}
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
                    <div className={s.button}>
                        <SharedButton 
                            content='SAVE'
                            onclick={submitRes}
                        />
                    </div>
                </form>
            </Wrapper>
        </div>
    )
}