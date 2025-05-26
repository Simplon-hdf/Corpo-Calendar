import { mockEvents } from '../data/mockData';

interface Comment {
  id: string;
  content: string;
  authorId: string;
  eventId: string;
  createdAt: Date;
}

interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
  createdBy: string;
  comments: Comment[];
}

export class EventService {
  async getEvents(): Promise<Event[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockEvents);
      }, 500);
    });
  }

  async getEventById(eventId: string): Promise<Event | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const event = mockEvents.find(e => e.id === eventId);
        resolve(event || null);
      }, 500);
    });
  }

  async createEvent(eventData: Omit<Event, 'id' | 'comments'>): Promise<Event> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newEvent = {
          id: (mockEvents.length + 1).toString(),
          ...eventData,
          comments: [],
        } as Event;
        mockEvents.push(newEvent);
        resolve(newEvent);
      }, 500);
    });
  }

  async updateEvent(eventId: string, eventData: Partial<Event>): Promise<Event> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const eventIndex = mockEvents.findIndex(e => e.id === eventId);
        if (eventIndex === -1) {
          reject(new Error('Event not found'));
          return;
        }
        
        mockEvents[eventIndex] = {
          ...mockEvents[eventIndex],
          ...eventData,
          id: eventId // Ensure ID doesn't change
        };
        
        resolve(mockEvents[eventIndex]);
      }, 500);
    });
  }

  async deleteEvent(eventId: string): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const eventIndex = mockEvents.findIndex(e => e.id === eventId);
        if (eventIndex === -1) {
          reject(new Error('Event not found'));
          return;
        }
        mockEvents.splice(eventIndex, 1);
        resolve();
      }, 500);
    });
  }
}