import Link from "next/link"
import SharedButton from "../../layout/SharedButton"

export default function Reservations() {

    const getRes = async () => {
        const response = await fetch('/api/reservations')
        const data = await response.json()
        console.log(JSON.stringify(data))
    }
    return (
        <div>
            <h2>Todays Bookings</h2>
                <SharedButton 
                    content='See Reservations'
                    onclick={getRes}
                />
                <Link href='/'>BACK</Link>

        </div>
    )
}