import { useState } from 'react';

interface EventFormProps {
  onSubmit: (eventData: any) => void;
  onCancel: () => void;
}

export function EventForm({ onSubmit, onCancel }: EventFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    startDate: '',
    endDate: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <h3>Nouvel événement</h3>
      <div>
        <label htmlFor="title">Titre</label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
          required
        />
      </div>
      <div>
        <label htmlFor="location">Lieu</label>
        <input
          type="text"
          id="location"
          value={formData.location}
          onChange={(e) => setFormData({...formData, location: e.target.value})}
          required
        />
      </div>
      <div>
        <label htmlFor="startDate">Date de début</label>
        <input
          type="datetime-local"
          id="startDate"
          value={formData.startDate}
          onChange={(e) => setFormData({...formData, startDate: e.target.value})}
          required
        />
      </div>
      <div>
        <label htmlFor="endDate">Date de fin</label>
        <input
          type="datetime-local"
          id="endDate"
          value={formData.endDate}
          onChange={(e) => setFormData({...formData, endDate: e.target.value})}
          required
        />
      </div>
      <div className="form-buttons">
        <button type="submit" className="btn btn-primary">Créer</button>
        <button type="button" className="btn btn-ghost" onClick={onCancel}>Annuler</button>
      </div>
    </form>
  );
}