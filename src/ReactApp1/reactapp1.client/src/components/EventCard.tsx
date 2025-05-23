import React from 'react';
import { IEvent } from '../interfaces/IEvent';

interface EventCardProps {
  event: IEvent;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => (
  <div className="event-card">
    <h3>{event.title}</h3>
    <p>{event.description}</p>
    <p>{new Date(event.startDate).toLocaleDateString()}</p>
    <p>{event.location}</p>
    <div className="event-footer">
      <button className="btn btn-secondary">Voir plus</button>
      <button className="btn btn-ghost">Modifier</button>
    </div>
    <div className="comments">
        {event.comments.map(comment => (
            <div key={comment.id} className="comment">
            <p>{comment.content}</p>
            <p>{new Date(comment.date).toLocaleDateString()}</p>
            </div>
        ))}
    </div>
    <div className="add-comment">
        <textarea placeholder="Ajouter un commentaire"></textarea>
        <button className="btn btn-primary">Envoyer</button>
    </div>
  </div>
);