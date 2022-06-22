import Link from "next/link"
import { useState } from "react"
import SharedButton from "../../layout/SharedButton"
import Wrapper from "../../layout/Wrapper"
import s from "../Reservations/index.module.scss"

export default function Reservations() {
    const [resData, setResData] = useState()
    const newDate = new Date()
    const day = newDate.getDate()
    const month = newDate.getMonth() + 1
    const year = newDate.getFullYear()
    const today = `${year}-${month<10?`0${month}`:`${month}`}-${day}`

    const getRes = async () => {
        const response = await fetch('/api/reservations')
        const data = await response.json()
        setResData(data)

    }
    
    return (
        <div>
            { !resData ?
            <Wrapper>
                <h2>Todays Bookings</h2>
            </Wrapper> : null } 
            <div className={s.date}>
                <h2>{today}</h2>
                <SharedButton 
                    content='See Reservations'
                    onclick={getRes}
                /> 
                {resData?.map((res) => {
                    if (res.date == today) {
                        return(
                            <div key={res.name} className={s.res}>
                                <p><b>NAME:</b> {res.name}</p>
                                <p><b>STYLE:</b> {res.haircut}</p>
                                <p><b>TIME:</b> {res.time}</p>
                            </div> 
                        )   
                    }
                })}
            </div>
        </div>    
    )
}