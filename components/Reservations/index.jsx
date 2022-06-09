import Link from "next/link"
import { useState } from "react"
import SharedButton from "../../layout/SharedButton"

export default function Reservations() {
    const [resData, setResData] = useState()

    const getRes = async () => {
        const response = await fetch('/api/reservations')
        const data = await response.json()
        setResData(data)
    }
   
    return (
        <div>
            <h2>Todays Bookings</h2>
                <SharedButton 
                    content='See Reservations'
                    onclick={getRes}
                />
                <Link href='/'>BACK</Link>
                {resData?.map((res) => (
                    <div key={res.name}>
                        <p>NAME: {res.name}</p>
                        <p>STYLE: {res.haircut}</p>
                        <p>DATE: {res.date}</p>
                        <p>TIME: {res.time}</p>
                    </div>    
                ))}

        </div>
    )
}