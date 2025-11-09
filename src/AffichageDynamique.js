import { useState } from 'react';

function AffichageDynamique() {
  const [clics, setClics] = useState(0);
  const messages = ["Premier clic", "Deuxième clic", "Troisième clic", "Encore un clic !"];

  function handleClick() {
    setClics(clics + 1);
  }

  const messageIndex = Math.min(clics, messages.length - 1);

  return (
    <div>
      <div className="dynamic-message">{messages[messageIndex]}</div>
      <button className="btn btn-secondary" onClick={handleClick}>
        Cliquer ici
      </button>
      <div className="clics-count">Nombre total de clics : {clics}</div>
    </div>
  );
}

export default AffichageDynamique;
