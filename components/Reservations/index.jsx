import Link from "next/link"
import { useState } from "react"
import SharedButton from "../../layout/SharedButton"
import Wrapper from "../../layout/Wrapper"
import s from "../Reservations/index.module.scss"

export default function Reservations() {
    const [resData, setResData] = useState()
    const newArray = []
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
        <Wrapper>
            {!resData ?
            <div>
                <h2>Todays Bookings</h2>
                    <SharedButton 
                        content='See Reservations'
                        onclick={getRes}
                    /> 
                </div> : null}

                <Link href='/'>BACK</Link>
                {resData?.map((res) => {
                    if (res.date == today) {
                        return(
                        <div key={res.name} className={s.res}>
                            <p>NAME: {res.name}</p>
                            <p>STYLE: {res.haircut}</p>
                            <p>DATE: {res.date}</p>
                            <p>TIME: {res.time}</p>
                        </div> 
                        )   
                    }
                })}

        </Wrapper>    )
}