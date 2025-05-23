import { Comment } from '../services/CommentService';
import '../styles/Comments.css';

interface CommentsProps {
  comments: Comment[];
  currentUser: {
    id: string;
    firstName: string;
    lastName: string;
  };
}

export function Comments({ comments, currentUser }: CommentsProps) {
  return (
    <div className="comments-list">
      {comments.map(comment => (
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
      ))}
    </div>
  );
}