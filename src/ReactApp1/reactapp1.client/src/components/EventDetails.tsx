import { useState } from 'react';
import '../styles/EventDetails.css';

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
}

interface EventDetailsProps {
  event: Event;
  currentUser: User;
  onClose: () => void;
  onComment: (content: string) => void;
}

export function EventDetails({ event, currentUser, onClose, onComment }: EventDetailsProps) {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      onComment(newComment);
      setNewComment('');
    }
  };

  return (
    <div className="modal-overlay" onClick={(e) => {
      if (e.target === e.currentTarget) onClose();
    }}>
      <div className="modal-content event-details" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{event.title}</h2>
          <button className="btn btn-ghost close-button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="event-details-content">
          <div className="detail-group">
            <span className="icon">📅</span>
            <div>
              <h3>Date et heure</h3>
              <p>
                {new Date(event.startDate).toLocaleDateString('fr-FR', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <p>
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
            </div>
          </div>

          <div className="detail-group">
            <span className="icon">📍</span>
            <div>
              <h3>Lieu</h3>
              <p>{event.location}</p>
            </div>
          </div>

          <div className="detail-group">
            <span className="icon">📝</span>
            <div>
              <h3>Description</h3>
              <p>{event.description}</p>
            </div>
          </div>

          <div className="comments-section">
            <h3>Commentaires</h3>
            
            <form onSubmit={handleSubmit} className="comment-form">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Ajouter un commentaire..."
                rows={3}
                required
              />
              <button type="submit" className="btn btn-primary">
                Commenter
              </button>
            </form>

            <div className="comments-list">
              {event.comments && event.comments.length > 0 ? (
                event.comments.map(comment => (
                  <div key={comment.id} className="comment-item">
                    <div className="comment-header">
                      <strong>
                        {comment.authorId === currentUser.id ? 'Vous' : 'Utilisateur'}
                      </strong>
                      <span className="comment-date">
                        {new Date(comment.createdAt).toLocaleDateString('fr-FR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </span>
                    </div>
                    <p className="comment-content">{comment.content}</p>
                  </div>
                ))
              ) : (
                <p className="no-comments">Aucun commentaire pour le moment</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}