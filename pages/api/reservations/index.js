import { reservations } from '../../../data/reservations'

export default function handler(req, res) {
    let valid = true
    if(req.method === 'POST') {
        const reservation = req.body.resInfo
        const newRes = {
            name: reservation.clientName,
            date: reservation.date,
            haircut: reservation.haircut,
            time: reservation.time
        }
        reservations.forEach((reser) => {
            if(reser.date == reservation.date && reser.time == reservation.time) {
                console.log('time booked')
                res.status(400)
                valid = false
            }
        })
        if (valid) {
            reservations.push(newRes)
            res.status(201).json(newRes)
        } else {
            res.status(405).json({ message: 'Time already booked' })
        }
        
    }
    else if (req.method === 'GET') {
        res.status(200).json(reservations)
    }
}