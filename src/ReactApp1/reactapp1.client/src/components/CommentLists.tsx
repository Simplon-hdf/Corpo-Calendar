import { IComment } from '../interfaces/IComment';


interface CommentListProps {
  comments: IComment[];
  onReply: (commentId: string) => void;
}

export function CommentList({ comments, onReply }: CommentListProps) {
  return (
    <div className="comments-section">
      {comments.map(comment => (
        <div key={comment.id} className="comment-card">
          <div className="comment-header">
            <span className="comment-author">{comment.author.firstName} {comment.author.lastName}</span>
            <span className="comment-date">
              {new Date(comment.createdAt).toLocaleDateString('fr-FR')}
            </span>
          </div>
          <p className="comment-content">{comment.content}</p>
          <button 
            className="btn btn-ghost"
            onClick={() => onReply(comment.id)}
          >
            Répondre
          </button>
          
          {comment.replies && comment.replies.length > 0 && (
            <div className="comment-replies">
              <CommentList comments={comment.replies} onReply={onReply} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}