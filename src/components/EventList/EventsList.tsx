import React, { useEffect } from 'react'
import { EventsType } from '../../types/types'
import { useParams } from 'react-router-dom'
import EventCard from './EventCard/EventCard'

type EventsListProps = {
    eventsUsed: EventsType[]
    setHasEventBeenSelected: React.Dispatch<React.SetStateAction<boolean>>
}

const EventsList = ({eventsUsed, setHasEventBeenSelected}: EventsListProps) => {
    if(!eventsUsed) return <p>No Events!</p>
    const {eventsId} = useParams()

    if(!eventsId) return <p>Error</p>
    const selectedEvent = eventsUsed.find((event)=> event.id === parseInt(eventsId))

    useEffect(() => {
        setHasEventBeenSelected(false)
    })


    return (
        <div>
            <div>{selectedEvent && <EventCard selectedEvent={selectedEvent}/>}</div>
        </div>
    )
}

export default EventsList
