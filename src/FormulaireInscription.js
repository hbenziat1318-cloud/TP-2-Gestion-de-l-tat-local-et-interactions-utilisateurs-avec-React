import { useState } from 'react';

function FormulaireInscription() {
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    alert('Prénom: ' + prenom + '\\nEmail: ' + email);
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Prénom :</label>
        <input 
          className="form-input"
          type="text" 
          value={prenom} 
          onChange={(e) => setPrenom(e.target.value)} 
          placeholder="Votre prénom"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Email :</label>
        <input 
          className="form-input"
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="votre@email.com"
        />
      </div>
      <button className="btn btn-success" type="submit">
        S'inscrire
      </button>
    </form>
  );
}

export default FormulaireInscription;
