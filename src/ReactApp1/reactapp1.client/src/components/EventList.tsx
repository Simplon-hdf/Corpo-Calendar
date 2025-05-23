import { useEffect, useState } from 'react';
import { IEvent } from '../interfaces/IEvent';
import { EventService } from '../services/EventService';
import { EventCard } from './EventCard';

export const EventList = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const eventService = new EventService();

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    const data = await eventService.getEvents();
    const eventsWithComments: IEvent[] = data.map((event: any) => ({
      ...event,
      comments: event.comments ?? [],
    }));
    setEvents(eventsWithComments);
  };

  return (
    <div className="event-list">
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};