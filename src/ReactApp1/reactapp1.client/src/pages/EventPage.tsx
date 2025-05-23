import { useState, useEffect } from 'react';
import { EventForm } from '../components/EventForm';
import { EventDetails } from '../components/EventDetails';
import { EventService } from '../services/EventService';
import { CommentService } from '../services/CommentService';
import '../styles/EventPage.css';

interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
  createdBy: string;
  comments?: Comment[];
}

interface Comment {
  id: string;
  content: string;
  authorId: string;
  eventId: string;
  createdAt: Date;
}

interface User {
  id: string;
  firstName: string;
  lastName: string;
  canManageEvents: boolean;
}

interface EventsPageProps {
  user: User;
}

export function EventsPage({ user }: EventsPageProps) {
  const [events, setEvents] = useState<Event[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const eventService = new EventService();
  const commentService = new CommentService();

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      setLoading(true);
      setError(null);
      const eventData = await eventService.getEvents();
      setEvents(eventData);
    } catch (err) {
      setError('Erreur lors du chargement des événements');
      console.error('Erreur:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateEvent = async (eventData: Partial<Event>) => {
    try {
      setError(null);

      if (
        !eventData.title ||
        !eventData.description ||
        !eventData.location ||
        !eventData.startDate ||
        !eventData.endDate
      ) {
        setError("Tous les champs obligatoires doivent être remplis.");
        return;
      }

      await eventService.createEvent({
        title: eventData.title,
        description: eventData.description,
        location: eventData.location,
        startDate: eventData.startDate,
        endDate: eventData.endDate,
        createdBy: user.id,
      });

      await loadEvents();
      setShowForm(false);
    } catch (err) {
      setError('Erreur lors de la création de l\'événement');
      console.error('Erreur:', err);
    }
  };

  const handleDeleteEvent = async (eventId: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet événement ?')) {
      try {
        setError(null);
        await eventService.deleteEvent(eventId);
        await loadEvents();
        if (selectedEvent?.id === eventId) {
          setSelectedEvent(null);
        }
      } catch (err) {
        setError('Erreur lors de la suppression de l\'événement');
        console.error('Erreur:', err);
      }
    }
  };

  const handleAddComment = async (eventId: string, content: string) => {
    try {
      await commentService.addComment(eventId, content, user.id);
      await loadEvents();
      const updatedEvent = events.find(e => e.id === eventId);
      if (updatedEvent) {
        setSelectedEvent(updatedEvent);
      }
    } catch (err) {
      setError('Erreur lors de l\'ajout du commentaire');
      console.error('Erreur:', err);
    }
  };

  if (loading) {
    return <div className="loading">Chargement des événements...</div>;
  }

  return (
    <div className="events-page">
      <div className="events-header">
        <h2>Événements à venir</h2>
        {user.canManageEvents && (
          <button 
            className="btn btn-primary"
            onClick={() => setShowForm(true)}
          >
            Créer un événement
          </button>
        )}
      </div>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {events.length === 0 ? (
        <div className="no-events">
          Aucun événement à afficher
        </div>
      ) : (
        <div className="events-grid">
          {events.map(event => (
            <div key={event.id} className="event-card">
              <h3 className="event-title">{event.title}</h3>
              <div className="event-info">
                <p>
                  <span className="icon">📅</span>
                  {new Date(event.startDate).toLocaleDateString('fr-FR', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <p>
                  <span className="icon">⏰</span>
                  {new Date(event.startDate).toLocaleTimeString('fr-FR', {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                  {' - '}
                  {new Date(event.endDate).toLocaleTimeString('fr-FR', {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
                <p>
                  <span className="icon">📍</span>
                  {event.location}
                </p>
              </div>
              <p className="event-description">{event.description}</p>
              <div className="event-footer">
                <button 
                  className="btn btn-secondary"
                  onClick={() => setSelectedEvent(event)}
                >
                  Voir plus
                </button>
                {user.canManageEvents && (
                  <div className="admin-buttons">
                    <button 
                      className="btn btn-ghost"
                      onClick={() => {/* TODO: Implement edit */}}
                    >
                      Modifier
                    </button>
                    <button 
                      className="btn btn-danger"
                      onClick={() => handleDeleteEvent(event.id)}
                    >
                      Supprimer
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <EventForm 
              onSubmit={handleCreateEvent}
              onCancel={() => setShowForm(false)}
            />
          </div>
        </div>
      )}

      {selectedEvent && (
        <EventDetails 
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          onComment={(content) => handleAddComment(selectedEvent.id, content)}
          currentUser={user}
        />
      )}
    </div>
  );
}