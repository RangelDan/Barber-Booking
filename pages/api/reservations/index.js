import { reservations } from '../../../data/reservations'

export default function handler(req, res) {
    if(req.method === 'POST') {
        const reservation = req.body.resInfo
        console.log(req.body)
        const newRes = {
            name: reservation.clientName,
            date: reservation.date,
            haircut: reservation.haircut,
            time: reservation.time
        }
        reservations.push(newRes)
        res.status(201).json(newRes)
    }
    else if (req.method === 'GET') {
        res.status(200).json(reservations)
    }
}