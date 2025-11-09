import { useState, useEffect } from 'react';

function CompteurTitre() {
  const [compte, setCompte] = useState(0);

  useEffect(() => {
    document.title = 'Nombre de clics : ' + compte;
  }, [compte]);

  return (
    <div className="compteur">
      <div className="compte-affichage">{compte}</div>
      <button className="btn btn-primary" onClick={() => setCompte(compte + 1)}>
        Cliquer pour changer le titre
      </button>
    </div>
  );
}

export default CompteurTitre;
