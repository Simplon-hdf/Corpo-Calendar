import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EventsPage } from './pages/EventPage';
import { AuthService } from './services/AuthService';
import './styles/index.css';
import './styles/components.css';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const authService = new AuthService();

  const handleLogin = async (email, password) => {
    try {
      setLoading(true);
      setError('');
      const userData = await authService.login(email, password);
      setUser(userData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fonction de déconnexion
  const handleLogout = () => {
    setUser(null);
  };

  return (
  <Router>
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>Corpo Calendar</h1>
          {user && (
            <div className="user-info">
              <span>Bienvenue, {user.firstName} {user.lastName}</span>
              <button className="btn btn-ghost" onClick={handleLogout}>Déconnexion</button>
            </div>
          )}
        </div>
      </header>

      <main className="app-main">
       {!user ? (
            <div className="login-page">
              <LoginForm onLogin={handleLogin} error={error} loading={loading} />
            </div>
          ) : (
            <Routes>
              <Route path="/" element={<EventsPage user={user} />} />
            </Routes>
          )}
      </main>
    </div>
  </Router>
);
}

function LoginForm({ onLogin, error, loading }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      {error && <div className="error-message">{error}</div>}
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Mot de passe:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
          required
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Connexion...' : 'Connexion'}
      </button>
    </form>
  );
}

export default App;