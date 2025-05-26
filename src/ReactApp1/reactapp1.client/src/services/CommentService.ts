import { mockEvents } from '../data/mockData';

export interface Comment {
  id: string;
  content: string;
  authorId: string;
  eventId: string;
  createdAt: Date;
}

export class CommentService {
  async addComment(eventId: string, content: string, authorId: string): Promise<Comment> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newComment = {
          id: Math.random().toString(36).substr(2, 9),
          content,
          authorId,
          eventId,
          createdAt: new Date()
        };
        
        const event = mockEvents.find(e => e.id === eventId);
        if (event) {
          if (!event.comments) {
            event.comments = [];
          }
          event.comments.push(newComment);
        }
        
        resolve(newComment);
      }, 500); 
    });
  }

  async deleteComment(eventId: string, commentId: string): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const event = mockEvents.find(e => e.id === eventId);
        if (event && event.comments) {
          event.comments = event.comments.filter(c => c.id !== commentId);
        }
        resolve();
      }, 500);
    });
  }

  async updateComment(eventId: string, commentId: string, content: string): Promise<Comment> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const event = mockEvents.find(e => e.id === eventId);
        if (event && event.comments) {
          const comment = event.comments.find(c => c.id === commentId);
          if (comment) {
            comment.content = content;
            resolve(comment);
          }
        }
        reject(new Error('Commentaire non trouvé'));
      }, 500);
    });
  }

  async getComments(eventId: string): Promise<Comment[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const event = mockEvents.find(e => e.id === eventId);
        resolve(event?.comments || []);
      }, 500);
    });
  }
}