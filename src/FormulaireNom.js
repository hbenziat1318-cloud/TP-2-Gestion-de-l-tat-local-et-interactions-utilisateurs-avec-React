import { useState } from 'react';

function FormulaireNom() {
  const [nom, setNom] = useState('');

  function handleChange(event) {
    setNom(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('Le nom saisi est : ' + nom);
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Nom :</label>
        <input 
          className="form-input"
          type="text" 
          value={nom} 
          onChange={handleChange} 
          placeholder="Entrez votre nom"
        />
      </div>
      <button className="btn btn-success" type="submit">
        Soumettre
      </button>
    </form>
  );
}

export default FormulaireNom;
