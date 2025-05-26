export const mockUsers = [
  {
    id: '1',
    email: 'admin@test.com',
    password: 'admin123',
    firstName: 'Admin',
    lastName: 'User',
    role: 'ADMIN',
    canManageEvents: true
  },
  {
    id: '2',
    email: 'user@test.com',
    password: 'user123',
    firstName: 'John',
    lastName: 'Doe',
    role: 'USER',
    canManageEvents: false
  }
];

export const mockEvents = [
  {
    id: '1',
    title: 'Réunion d\'équipe',
    description: 'Réunion hebdomadaire de l\'équipe pour discuter des avancées du projet',
    location: 'Salle A - 3ème étage',
    startDate: new Date('2024-03-25T10:00:00'),
    endDate: new Date('2024-03-25T11:30:00'),
    createdBy: '1',
    comments: [
      {
        id: 'c1',
        content: 'N\'oubliez pas de préparer vos rapports d\'avancement',
        authorId: '1',
        eventId: '1',
        createdAt: new Date('2024-03-20T09:00:00')
      },
      {
        id: 'c2',
        content: 'Je serai en retard de 5 minutes',
        authorId: '2',
        eventId: '1',
        createdAt: new Date('2024-03-25T09:30:00')
      }
    ]
  },
  {
    id: '2',
    title: 'Formation React',
    description: 'Formation sur les nouveautés de React et les bonnes pratiques de développement',
    location: 'Salle de conférence B',
    startDate: new Date('2024-03-26T14:00:00'),
    endDate: new Date('2024-03-26T17:00:00'),
    createdBy: '1',
    comments: [
      {
        id: 'c3',
        content: 'Pensez à installer Node.js avant la formation',
        authorId: '1',
        eventId: '2',
        createdAt: new Date('2024-03-24T15:00:00')
      }
    ]
  },
  {
    id: '3',
    title: 'Afterwork Team Building',
    description: 'Soirée détente et team building autour d\'un verre',
    location: 'Le Petit Bistrot',
    startDate: new Date('2024-03-28T18:00:00'),
    endDate: new Date('2024-03-28T21:00:00'),
    createdBy: '2',
    comments: []
  },
  {
    id: '4',
    title: 'Review de Code',
    description: 'Session de revue de code et d\'amélioration des pratiques',
    location: 'Salle C',
    startDate: new Date('2024-03-29T11:00:00'),
    endDate: new Date('2024-03-29T12:30:00'),
    createdBy: '1',
    comments: [
      {
        id: 'c4',
        content: 'J\'ai préparé quelques exemples de refactoring',
        authorId: '1',
        eventId: '4',
        createdAt: new Date('2024-03-27T16:00:00')
      }
    ]
  }
];