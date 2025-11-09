import { useState } from 'react';

function Compteur() {
  const [compte, setCompte] = useState(0);

  function incrementer() {
    setCompte(compte + 1);
  }

  return (
    <div className="compteur">
      <div className="compte-affichage">{compte}</div>
      <button className="btn btn-primary" onClick={incrementer}>
        Incrémenter
      </button>
    </div>
  );
}

export default Compteur;
