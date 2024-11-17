import React from 'react';
import { EventsType } from '../../../types/types';

type EventCardProps = {
    selectedEvent: EventsType;
};

const EventCard = ({ selectedEvent }: EventCardProps) => {
    return (
        <div>
        <h1>{selectedEvent.title}</h1>
        <img src={selectedEvent.imgUrl || ''} alt={selectedEvent.title} />
        <p>{selectedEvent.description}</p>
        <p>Date: {selectedEvent.dateOfEvent}</p>
        <p>Location: {selectedEvent.location}</p>
        <a href={selectedEvent.ticketLink}>Get Tickets</a>
        {selectedEvent.fee && <p>Price: {selectedEvent.fee}</p>}
        <p>Host:{selectedEvent.host}</p>
        
        </div>
    );
};

export default EventCard;
