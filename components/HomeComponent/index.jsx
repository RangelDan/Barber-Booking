import { useState } from "react";
import { haircuts, openTimes } from '../../data/dropdownData'
import Dropdown from "../../layout/Dropdown";
import SharedButton from "../../layout/SharedButton";
import TextField from "../../layout/TextField";
import Wrapper from "../../layout/Wrapper"
import { validate } from "./validate";
import S from "../HomeComponent/index.module.scss"
import Background from "../../layout/Background";

export default function Home() {
    const [resData, setResData] = useState({})
    const [errs, setErrs] = useState(false)
    const bg = '/assets/logo.jpg'
    
    const onResChange = (e) => {
        setResData({...resData, [e.target.id]: e.target.value })
    }

    const submitRes = async (event) => {
        event.preventDefault();
        const resInfo = {
            clientName: resData.clientName,
            haircut: resData.haircut,
            date: resData.date,
            time: resData.time
        }
        if (validate(resInfo) == false) {
            setErrs('Please fill in all fields')
            return false
        } else {
            setErrs(false)
        }

        const response = await fetch('/api/reservations', {
            method: 'POST',
            body: JSON.stringify({ resInfo }),
            headers: {
                "Content-Type": "application/json"
            },
        })
        if (!response.ok) {
            setErrs('*Time and date unavailable')
        } else {
            setErrs(false)
            alert('Appointment booked!')
        }
    }

    return (
        <Background img={bg}>
            <Wrapper>
                <form className={S.forms}> 
                    {errs ? 
                        <p className={S.errs}>{errs}</p> : null
                    }
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
                    <div className={S.button}>
                        <SharedButton 
                            content='SAVE'
                            onclick={submitRes}
                        />
                    </div>
                </form>
            </Wrapper>
        </Background>
    )
}