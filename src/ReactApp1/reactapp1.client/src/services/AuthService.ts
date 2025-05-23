import { mockUsers } from '../data/mockData';

export class AuthService {
  async login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = mockUsers.find(u => u.email === email && u.password === password);
        if (user) {
          resolve(user);
        } else {
          reject(new Error('Identifiants invalides'));
        }
      }, 500); // Simulation d'un délai réseau
    });
  }
}